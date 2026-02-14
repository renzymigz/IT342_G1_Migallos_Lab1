package com.example.mobile.authapp

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.example.mobile.R
import com.example.mobile.authapp.api.RetrofitClient
import com.example.mobile.authapp.model.LoginRequest
import com.example.mobile.authapp.model.LoginResponse
import com.example.mobile.authapp.model.User
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        // 1. Initialize Views
        val etIdentifier = findViewById<EditText>(R.id.etIdentifier)
        val etPassword = findViewById<EditText>(R.id.etPassword)
        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val tvRegisterLink = findViewById<TextView>(R.id.tvRegisterLink)

        // 2. Handle Login Click
        btnLogin.setOnClickListener {
            val identifier = etIdentifier.text.toString().trim()
            val password = etPassword.text.toString().trim()

            // Basic Validation
            if (identifier.isEmpty() || password.isEmpty()) {
                Toast.makeText(this, "Please enter your username/email and password", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // --- STEP 1: AUTHENTICATE ---
            val loginRequest = LoginRequest(email = identifier, password = password)

            RetrofitClient.instance.login(loginRequest).enqueue(object : Callback<LoginResponse> {
                override fun onResponse(call: Call<LoginResponse>, response: Response<LoginResponse>) {
                    if (response.isSuccessful && response.body() != null) {
                        val token = response.body()!!.token

                        // Ensure "Bearer " prefix is present
                        val bearerToken = if (token.startsWith("Bearer ")) token else "Bearer $token"

                        // --- STEP 2: FETCH USER DETAILS ---
                        fetchUserProfile(bearerToken)

                    } else {
                        Toast.makeText(this@LoginActivity, "Login Failed: Invalid Credentials", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<LoginResponse>, t: Throwable) {
                    Toast.makeText(this@LoginActivity, "Connection Error: ${t.message}", Toast.LENGTH_SHORT).show()
                }
            })
        }

        // 3. Handle Register Link Click
        tvRegisterLink.setOnClickListener {
            // Corrected to point to RegisterActivity (not ProfileActivity)
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }
    }

    // Helper function to get user details after getting the token
    private fun fetchUserProfile(bearerToken: String) {
        RetrofitClient.instance.getProfile(bearerToken).enqueue(object : Callback<User> {
            override fun onResponse(call: Call<User>, response: Response<User>) {
                if (response.isSuccessful && response.body() != null) {
                    val user = response.body()!!

                    // --- STEP 3: SAVE SESSION ---
                    val sharedPref = getSharedPreferences("UserSession", Context.MODE_PRIVATE)
                    with(sharedPref.edit()) {
                        putString("TOKEN", bearerToken)
                        putInt("USER_ID", user.userId)
                        putString("USERNAME", user.username)
                        putString("EMAIL", user.email)
                        putString("FIRST_NAME", user.firstName)
                        putString("LAST_NAME", user.lastName)
                        putString("PHONE", user.phone)
                        apply() // Commit changes
                    }

                    Toast.makeText(this@LoginActivity, "Welcome back, ${user.firstName}!", Toast.LENGTH_SHORT).show()

                    // Navigate to Profile
                    val intent = Intent(this@LoginActivity, ProfileActivity::class.java)
                    // Clear the back stack so pressing "Back" doesn't return to Login
                    intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                    startActivity(intent)
                    finish()

                } else {
                    Toast.makeText(this@LoginActivity, "Failed to load profile data", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<User>, t: Throwable) {
                Toast.makeText(this@LoginActivity, "Profile Error: ${t.message}", Toast.LENGTH_SHORT).show()
            }
        })
    }
}