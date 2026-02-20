# TASK CHECKLIST — Lab 2: User Registration & Authentication (Backend + Web)

---

## DONE 

### Project Setup
- [x] Project folder structure set up (`/web`, `/backend`, `/mobile`, `/docs`, `README.md`, `TASK_CHECKLIST.md`) — `[commit: b773d67]`
- [x] Spring Boot backend initialized with dependencies (JPA, Security, JWT, Lombok, MySQL) — `[commit: 23a37da]`
- [x] React frontend initialized with Vite — `[commit: e1eb1eb]`
- [x] Database connection configured (MySQL) — `application.properties`
- [x] Password encryption with BCrypt — configured in SecurityConfig — `[commit: 34bba00]`

### Backend — Entity (`entity/`)
- [x] Create `User` entity with fields: userId, firstName, lastName, email, phoneNumber, password — `[commit: 1a8bd07]`
- [x] Update `User` entity with username field and passwordHash — `[commit: 163b79e]`

### Backend — DTOs (`dto/`)
- [x] Create `RegisterRequestDto` (firstName, lastName, email, phoneNumber, password) — `[commit: a548357]`
- [x] Create `LoginRequestDto` (email, password) — `[commit: a548357]`
- [x] Create `UserDTO` (userId, username, email, firstName, lastName, phone) — `[commit: 686b84e]`

### Backend — Repository (`repository/`)
- [x] Create `UserRepository` with `findByEmail` and `existsByEmail` — `[commit: fb07c5b]`
- [x] Update `UserRepository` with `findByUsername` and `existsByUsername` — `[commit: 163b79e]`

### Backend — Service (`service/`)
- [x] Create `AuthService` with register and login logic — `[commit: 5c2a686]`
- [x] Update `AuthService` with token-based authentication and session management — `[commit: 686b84e]`

### Backend — Controller (`controller/`)
- [x] Create `AuthController` with `POST /api/auth/register` and `POST /api/auth/login` — `[commit: 06f7ab8]`
- [x] Create `UserController` with `GET /api/user/me` and `GET /api/user/dashboard/me` (protected endpoints) — `[commit: 686b84e]`

### Backend — Config (`config/`)
- [x] Create `SecurityConfig` (BCrypt, stateless sessions, permit auth endpoints) — `[commit: 34bba00]`
- [x] Update `SecurityConfig` with CORS configuration for frontend — `[commit: 34bba00]`
- [x] Create `JwtAuthenticationFilter` (validate token on protected routes) — `[commit: 370086d]`
- [x] Secure user endpoints with JWT authentication — `[commit: 370086d]`

### Backend — Util (`util/`)
- [x] Create `TokenProvider` (JWT generation & validation) — `[commit: ae7ba89]`

### Backend — Exception Handling (`exception/`)
- [x] Create `AuthException` for custom authentication errors — `[commit: 686b84e]`
- [x] Create `GlobalExceptionHandler` for proper HTTP error responses — `[commit: 686b84e]`

### Web (ReactJS) — Setup
- [x] Install and configure TailwindCSS — `[commit: d0a0f63]`
- [x] Install and configure SHADCN UI components — `[commit: 4616281]`
- [x] Setup React Router DOM for navigation — `[commit: b77d341]`


### Web (ReactJS) — Pages
- [x] Create Register page with split layout design — `[commit: b77d341]`
- [x] Create Login page with split layout design — `[commit: b77d341]`
- [x] Create Dashboard page — `[commit: 4616281]`
- [x] Create Profile page — `[commit: 4616281]`


### Web (ReactJS) — Integration
- [x] Connect Register page to `POST /api/auth/register` — `[commit: 1d3b4b7]`
- [x] Connect Login page to `POST /api/auth/login` — `[commit: 1d3b4b7]`
- [x] Connect Profile page to `GET /api/user/me` — `[commit: 1d3b4b7]`
- [x] Connect Dashboard page to `GET /api/user/dashboard/me` — `[commit: 1d3b4b7]`
- [x] Implement logout functionality (clear token and redirect) — `[commit: 1d3b4b7]`
- [x] Implement token storage in localStorage — `[commit: b64da96]`

### Web (ReactJS) — Security
- [x] Protect Dashboard and Profile routes (require authentication) — `[commit: 585544b]`
- [x] Protect Login and Register routes (redirect if authenticated) — `[commit: 585544b]`
- [x] Auto-logout on token tampering or expiration — `[commit: 370086d]`
- [x] Redirect to login on 401 Unauthorized — `[commit: b64da96]`

### Mobile (Android) — Setup
- [x] Android project initialized with Gradle and dependencies (Retrofit, Material Design) — `[commit: 9e9f64e]`
- [x] Network security config configured to allow API communication — `[commit: be3e875]`

### Mobile (Android) — Activities
- [x] Create Login activity with UI layout — `[commit: 9e9f64e]`
- [x] Create Register activity with UI layout — `[commit: 9e9f64e]`
- [x] Create Dashboard activity with UI layout — `[commit: 9e9f64e]`
- [x] Create Profile activity with UI layout — `[commit: 9e9f64e]`

### Mobile (Android) — API Integration
- [x] Create Retrofit client for API communication — `[commit: 9e9f64e]`
- [x] Create API service interface with auth endpoints — `[commit: 9e9f64e]`

### Mobile (Android) — Models
- [x] Create data models (User, LoginRequest, LoginResponse, RegisterRequest) — `[commit: 9e9f64e]`

### Mobile (Android) — UI/Resources
- [x] Add custom layouts for all activities — `[commit: 9e9f64e]`
- [x] Add rounded input background drawable — `[commit: 9e9f64e]`
- [x] Implement bottom navigation bar for Profile and Dashboard — `[commit: 711811f]`
- [x] Add UI items to dashboard screen — `[commit: 362c342]`
- [x] Add custom logout modal with dialog layout — `[commit: acd483c]`
- [x] Add static art images to screens (login, register, dashboard, logout) — `[commit: 4aa3e51]`

---

## IN PROGRESS
## TODO


---

## NOTES

### Key Features Implemented:
- **Backend**: JWT-based authentication with token validation, session management, password hashing (BCrypt), protected endpoints, global exception handling
- **Frontend**: Split layout UI, protected routes, axios interceptors, automatic token management, phone/password validation, loading/error states
- **Security**: Token tampering detection, automatic logout on invalid tokens, route protection for authenticated and guest users
- **UI/UX**: Responsive design with TailwindCSS, SHADCN UI components, conditional navbar rendering, profile dropdown menu
