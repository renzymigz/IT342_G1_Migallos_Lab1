package com.it342.g1.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.it342.g1.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    // Methods as per class diagram
    Optional<User> findByUsername(String username);
    Optional<User> findById(Integer id);
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    
    // Additional helper method
    boolean existsByUsername(String username);
}
