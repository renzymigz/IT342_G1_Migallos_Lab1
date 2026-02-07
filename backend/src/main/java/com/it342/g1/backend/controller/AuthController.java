package com.it342.g1.backend.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.it342.g1.backend.dto.DashboardDataDto;
import com.it342.g1.backend.dto.LoginRequestDto;
import com.it342.g1.backend.dto.RegisterRequestDto;
import com.it342.g1.backend.entity.User;
import com.it342.g1.backend.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody RegisterRequestDto request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequestDto request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout(@RequestHeader("Authorization") String token) {
        // Remove "Bearer " prefix if present
        String actualToken = token.startsWith("Bearer ") ? token.substring(7) : token;
        return ResponseEntity.ok(authService.logout(actualToken));
    }

    @GetMapping("/profile/{userId}")
    public ResponseEntity<User> viewProfile(@PathVariable Integer userId) {
        return ResponseEntity.ok(authService.getUserProfile(userId));
    }

    @GetMapping("/dashboard/{userId}")
    public ResponseEntity<DashboardDataDto> viewDashboard(@PathVariable Integer userId) {
        return ResponseEntity.ok(authService.getDashboardData(userId));
    }
}
