package com.it342.g1.backend.service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.it342.g1.backend.dto.LoginRequestDto;
import com.it342.g1.backend.dto.RegisterRequestDto;
import com.it342.g1.backend.dto.UserDTO;
import com.it342.g1.backend.entity.User;
import com.it342.g1.backend.exception.AuthException;
import com.it342.g1.backend.repository.UserRepository;
import com.it342.g1.backend.util.TokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    
    // Store active sessions (in production, use Redis or database)
    private final Set<String> activeSessions = new HashSet<>();

    // Methods as per class diagram
    public User registerUser(User user, String rawPassword) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new AuthException("Email is already registered");
        }
        
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new AuthException("Username is already taken");
        }

        user.setPasswordHash(passwordEncoder.encode(rawPassword));
        return userRepository.save(user);
    }

    public String authenticate(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new AuthException("Invalid username or password"));

        if (!user.verifyPassword(password, passwordEncoder)) {
            throw new AuthException("Invalid username or password");
        }

        String token = tokenProvider.generateToken(user);
        activeSessions.add(token);
        return token;
    }

    public boolean validateSession(String token) {
        return activeSessions.contains(token) && tokenProvider.validateToken(token);
    }

    public void terminateSession(String token) {
        activeSessions.remove(token);
    }

    // Additional methods for controller endpoints
    public Map<String, Object> register(RegisterRequestDto request) {
        User user = User.builder()
                .username(request.getUsername())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .build();

        User savedUser = registerUser(user, request.getPassword());
        String token = tokenProvider.generateToken(savedUser);
        activeSessions.add(token);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registered successfully");
        response.put("token", token);
        response.put("userId", savedUser.getUserId());
        return response;
    }

    public Map<String, Object> login(LoginRequestDto request) {
        // Support login with email or username
        User user = userRepository.findByEmail(request.getEmail())
                .or(() -> userRepository.findByUsername(request.getEmail()))
                .orElseThrow(() -> new AuthException("Invalid email/username or password"));

        if (!user.verifyPassword(request.getPassword(), passwordEncoder)) {
            throw new AuthException("Invalid email/username or password");
        }

        String token = tokenProvider.generateToken(user);
        activeSessions.add(token);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("token", token);
        response.put("userId", user.getUserId());
        return response;
    }

    public Map<String, Object> logout(String token) {
        terminateSession(token);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Logout successful");
        return response;
    }

    public UserDTO getUserProfileFromToken(String token) {
        if (!validateSession(token)) {
            throw new AuthException("Invalid or expired session");
        }

        String userIdStr = tokenProvider.getUserIdFromToken(token);
        Integer userId = Integer.parseInt(userIdStr);

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AuthException("User not found"));

        return UserDTO.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .phone(user.getPhone())
                .build();
    }
}
