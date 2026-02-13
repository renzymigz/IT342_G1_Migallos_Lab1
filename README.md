"# IT342 Lab 1 - User Registration & Authentication System

A full-stack mini web-application implementing secure user registration and authentication with JWT-based token management. This project features a Spring Boot backend with MySQL database and a React frontend with modern UI components.

---

## Project Description

This application provides a complete authentication system with the following features:

- **User Registration**: New users can create accounts with validation for email, username, phone number, and password
- **User Login**: Secure authentication using email and password with JWT token generation
- **Protected Routes**: Dashboard and profile pages accessible only to authenticated users
- **Profile Management**: View and manage user profile information
- **Session Management**: Automatic logout on token expiration or tampering
- **Responsive UI**: Modern, mobile-friendly interface with split-layout design

**Security Features:**
- Password hashing using BCrypt
- JWT-based authentication with token validation
- Protected API endpoints with authentication filter
- Automatic token refresh and session management
- CORS configuration for secure cross-origin requests

---

## Technologies Used

### Backend
- **Framework**: Spring Boot 4.0.2
- **Language**: Java 21
- **Database**: MySQL 8.0
- **ORM**: Spring Data JPA / Hibernate
- **Security**: Spring Security
- **Authentication**: JWT (JSON Web Tokens) using `jjwt` library
- **Password Encryption**: BCrypt
- **Build Tool**: Maven
- **Development Tools**: Lombok, Spring Boot DevTools

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Router**: React Router DOM 7.13.0
- **HTTP Client**: Axios 1.13.5
- **Styling**: TailwindCSS 4.1.18
- **UI Components**: Radix UI (Avatar, Dropdown Menu, Alert Dialog)
- **Icons**: Lucide React, Font Awesome

### Development Tools
- **Version Control**: Git & GitHub
- **API Testing**: Postman
- **IDE**: Visual Studio Code / IntelliJ IDEA

---

## Steps to Run Backend

### Prerequisites
- Java JDK 21 or higher
- MySQL 8.0 or higher
- Maven (or use included Maven Wrapper)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/renzymigz/IT342_G1_Migallos_Lab1.git
   cd IT342_G1_Migallos_Lab1
   ```

2. **Configure MySQL Database**
   - Create a new MySQL database:
     ```sql
     CREATE DATABASE mini_app_db;
     ```
   - Update database credentials in `backend/src/main/resources/application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/mini_app_db
     spring.datasource.username=root
     spring.datasource.password=your_password
     ```

3. **Configure JWT Secret** (Optional)
   - The JWT secret key is set in `application.properties`. Change it for production:
     ```properties
     jwt.secret=YourSecretKeyHere
     ```

4. **Navigate to backend directory**
   ```bash
   cd backend
   ```

5. **Run the application**
   
   **Option A: Using Maven Wrapper (Recommended)**
   ```bash
   # Windows
   .\mvnw.cmd spring-boot:run

   # Mac/Linux
   ./mvnw spring-boot:run
   ```

   **Option B: Using Maven**
   ```bash
   mvn spring-boot:run
   ```

6. **Verify backend is running**
   - Backend server should start on `http://localhost:8080`
   - Check console for: `Started BackendApplication in X seconds`

---

## Steps to Run Web App

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Setup Instructions

1. **Navigate to web directory**
   ```bash
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure API Base URL** (if needed)
   - The API base URL is set in `src/api/auth.js`:
     ```javascript
     baseURL: 'http://localhost:8080/api'
     ```
   - Update this if your backend runs on a different port

4. **Run the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Access the application**
   - Frontend will run on `http://localhost:5173`
   - Open your browser and navigate to the URL shown in the terminal

### Build for Production

To create an optimized production build:
```bash
npm run build
```

The build files will be in the `dist/` directory.

---


## API Endpoints

### Base URL
```
http://localhost:8080/api
```

### Authentication Endpoints (Public)

#### 1. Register New User
- **Endpoint**: `POST /auth/register`
- **Description**: Register a new user account
- **Request Body**:
  ```json
  {
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "09123456789",
    "password": "SecurePass123"
  }
  ```
- **Success Response** (200 OK):
  ```json
  {
    "message": "User registered successfully!"
  }
  ```
- **Error Response** (400 Bad Request):
  ```json
  {
    "error": "Email already exists"
  }
  ```
  or
  ```json
  {
    "error": "Username already exists"
  }
  ```

#### 2. Login User
- **Endpoint**: `POST /auth/login`
- **Description**: Authenticate user and receive JWT token
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "SecurePass123"
  }
  ```
- **Success Response** (200 OK):
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userId": 1,
    "message": "Login successful!"
  }
  ```
- **Error Response** (401 Unauthorized):
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

#### 3. Logout User
- **Endpoint**: `POST /auth/logout`
- **Description**: Invalidate user session
- **Headers**: 
  ```
  Authorization: Bearer <token>
  ```
- **Success Response** (200 OK):
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

---

### User Endpoints (Protected - Requires Authentication)

> **Note**: All protected endpoints require a valid JWT token in the Authorization header:
> ```
> Authorization: Bearer <your_jwt_token>
> ```

#### 4. Get User Profile
- **Endpoint**: `GET /user/me`
- **Description**: Retrieve current user's profile information
- **Headers**: 
  ```
  Authorization: Bearer <token>
  ```
- **Success Response** (200 OK):
  ```json
  {
    "userId": 1,
    "username": "johndoe",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "09123456789"
  }
  ```
- **Error Response** (401 Unauthorized):
  ```json
  {
    "error": "Unauthorized - Invalid or expired token"
  }
  ```

#### 5. Get Dashboard Data
- **Endpoint**: `GET /user/dashboard/me`
- **Description**: Retrieve current user's dashboard information
- **Headers**: 
  ```
  Authorization: Bearer <token>
  ```
- **Success Response** (200 OK):
  ```json
  {
    "userId": 1,
    "username": "johndoe",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "09123456789"
  }
  ```
- **Error Response** (401 Unauthorized):
  ```json
  {
    "error": "Unauthorized - Invalid or expired token"
  }
  ```

---

## Project Structure

```
IT342_G1_Migallos_Lab1/
├── backend/                    # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/it342/g1/backend/
│   │   │   │   ├── config/         # Security & JWT Config
│   │   │   │   ├── controller/     # REST Controllers
│   │   │   │   ├── dto/            # Data Transfer Objects
│   │   │   │   ├── entity/         # JPA Entities
│   │   │   │   ├── exception/      # Custom Exceptions
│   │   │   │   ├── repository/     # JPA Repositories
│   │   │   │   ├── service/        # Business Logic
│   │   │   │   └── util/           # Utility Classes
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── mvnw / mvnw.cmd
│
├── web/                        # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/               # API Client (Axios)
│   │   ├── assets/            # Static Assets
│   │   ├── components/        # React Components
│   │   ├── lib/               # Utility Functions
│   │   ├── pages/             # Page Components
│   │   ├── App.jsx            # Main App Component
│   │   └── main.jsx           # Entry Point
│   ├── package.json
│   └── vite.config.js
│
├── IT342_API_Collection.postman_collection.json
├── README.md
└── TASK_CHECKLIST.md
```

---

## Testing with Postman

A Postman collection is included in the repository: `IT342_API_Collection.postman_collection.json`

### Import Collection
1. Open Postman
2. Click **Import** → **Upload Files**
3. Select `IT342_API_Collection.postman_collection.json`
4. Collection will include all 5 endpoints with sample requests

### Environment Variables
The collection uses the following variable:
- `BASE_URL`: `http://localhost:8080/api`

