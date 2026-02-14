package com.example.mobile.authapp.model

data class User(
    val userId: Int,
    val username: String,
    val email: String,
    val firstName: String,
    val lastName: String,
    val phone: String
)