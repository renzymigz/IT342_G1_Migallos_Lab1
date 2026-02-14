package com.example.mobile.authapp.model

data class LoginResponse(
    val token: String,
    val message: String? // Just in case your backend sends a message too
)