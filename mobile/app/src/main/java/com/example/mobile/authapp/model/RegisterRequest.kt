package com.example.mobile.authapp.model

data class RegisterRequest(
    val username: String,
    val firstName: String,
    val lastName: String,
    val email: String,
    val phone: String,
    val password: String
)