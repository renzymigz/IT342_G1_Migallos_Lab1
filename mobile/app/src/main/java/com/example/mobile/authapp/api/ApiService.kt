package com.example.mobile.authapp.api

import com.example.mobile.authapp.model.LoginRequest
import com.example.mobile.authapp.model.LoginResponse
import com.example.mobile.authapp.model.RegisterRequest
import com.example.mobile.authapp.model.User
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.POST

interface ApiService {

    // 1. LOGIN (Returns the Token)
    @POST("api/auth/login")
    fun login(@Body request: LoginRequest): Call<LoginResponse>

    // 2. REGISTER (Returns a Map/Message)
    @POST("api/auth/register")
    fun register(@Body request: RegisterRequest): Call<Map<String, Any>>

    // 3. GET PROFILE (Needs Token in Header)
    @GET("api/user/me")
    fun getProfile(@Header("Authorization") token: String): Call<User>
}