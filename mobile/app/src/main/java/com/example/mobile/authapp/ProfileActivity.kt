package com.example.mobile.authapp

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import com.example.mobile.R
import com.google.android.material.bottomnavigation.BottomNavigationView

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
        val bottomNav = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        bottomNav.selectedItemId = R.id.nav_profile
        bottomNav.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.nav_dashboard -> {
                     startActivity(Intent(this, DashboardActivity::class.java))
                    true
                }
                R.id.nav_profile -> {
                    true
                }
                R.id.nav_logout -> {
                    showCustomLogoutDialog()
                    false
                }
                else -> false
            }
        }
    }

    private fun showCustomLogoutDialog() {
        val dialog = android.app.Dialog(this)
        dialog.setContentView(R.layout.dialog_logout_custom)

        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)

        val btnCancel = dialog.findViewById<Button>(R.id.btnCancel)
        val btnConfirm = dialog.findViewById<Button>(R.id.btnConfirmLogout)

        btnCancel.setOnClickListener {
            dialog.dismiss()
        }

        btnConfirm.setOnClickListener {
            val sharedPref = getSharedPreferences("UserSession", Context.MODE_PRIVATE)
            sharedPref.edit().clear().apply()

            val intent = Intent(this, LoginActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
            startActivity(intent)
            finish()
        }

        dialog.show()
    }
}