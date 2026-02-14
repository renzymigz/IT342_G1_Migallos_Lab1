package com.example.mobile.authapp

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import com.example.mobile.R

class ProfileActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        // 1. Initialize Views
        val tvUsername = findViewById<TextView>(R.id.tvUsername)
        val tvFirstName = findViewById<TextView>(R.id.tvFirstName)
        val tvLastName = findViewById<TextView>(R.id.tvLastName)
        val tvEmail = findViewById<TextView>(R.id.tvEmail)
        val tvPhone = findViewById<TextView>(R.id.tvPhone)
        val btnLogout = findViewById<Button>(R.id.btnLogout)

        // 2. Retrieve Data from SharedPreferences
        // We saved this in LoginActivity under the name "UserSession"
        val sharedPref = getSharedPreferences("UserSession", Context.MODE_PRIVATE)

        val username = sharedPref.getString("USERNAME", "N/A")
        val firstName = sharedPref.getString("FIRST_NAME", "N/A")
        val lastName = sharedPref.getString("LAST_NAME", "N/A")
        val email = sharedPref.getString("EMAIL", "N/A")
        val phone = sharedPref.getString("PHONE", "N/A")

        // 3. Display Data in the Views
        tvUsername.text = username
        tvFirstName.text = firstName
        tvLastName.text = lastName
        tvEmail.text = email
        tvPhone.text = phone

        // 4. Handle Logout
        btnLogout.setOnClickListener {
            // Clear saved tokens and user data
            sharedPref.edit().clear().apply()

            // Navigate back to Login
            val intent = Intent(this, LoginActivity::class.java)

            // Clear the back stack (FLAGS) so the user cannot press "Back" to return here
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK

            startActivity(intent)
            finish()
        }
    }
}