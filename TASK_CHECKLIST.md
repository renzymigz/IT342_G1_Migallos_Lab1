# TASK CHECKLIST — Lab 2: User Registration & Authentication (Backend + Web)

---

## ✅ DONE

### Project Setup
- [x] Project folder structure set up (`/web`, `/backend`, `/mobile`, `/docs`, `README.md`, `TASK_CHECKLIST.md`)
- [x] Spring Boot backend initialized with dependencies (JPA, Security, JWT, Lombok, MySQL)
- [x] Database connection configured (MySQL) — `application.properties`
- [x] Password encryption with BCrypt — configured in SecurityConfig

### Backend — Entity (`entity/`)
- [x] Create `User` entity with fields: userId, firstName, lastName, email, phoneNumber, password — `[commit: 1a8bd07]`

### Backend — DTOs (`dto/`)
- [x] Create `RegisterRequestDto` (firstName, lastName, email, phoneNumber, password) — `[commit: a548357]`
- [x] Create `LoginRequestDto` (email, password) — `[commit: a548357]`

### Backend — Repository (`repository/`)
- [x] Create `UserRepository` with `findByEmail` and `existsByEmail` — `[commit: fb07c5b]`

### Backend — Service (`service/`)
- [x] Create `AuthService` with register and login logic — `[commit: 5c2a686]`

### Backend — Controller (`controller/`)
- [x] Create `AuthController` with `POST /api/auth/register` and `POST /api/auth/login` — `[commit: 06f7ab8]`

### Backend — Config (`config/`)
- [x] Create `SecurityConfig` (BCrypt, stateless sessions, permit auth endpoints) — `[commit: 34bba00]`

### Backend — Util (`util/`)
- [x] Create `TokenProvider` (JWT generation & validation) — `[commit: ae7ba89]`

---

## 🔄 IN-PROGRESS

### Backend
- [ ] `GET /api/user/me` (protected endpoint — returns current user profile)
- [ ] JWT authentication filter (validate token on protected routes)

### Web (ReactJS)
- [ ] Register page
- [ ] Login page
- [ ] Dashboard/Profile page (protected)
- [ ] Logout functionality

---

## 📝 TODO

### Backend
- [ ] Error/exception handling (proper HTTP responses)
- [ ] CORS configuration for frontend

### Web (ReactJS)
- [ ] Axios/fetch setup for API calls
- [ ] Auth context/state management (store JWT token)
- [ ] Route protection (redirect unauthenticated users)
- [ ] Connect Register page to `POST /api/auth/register`
- [ ] Connect Login page to `POST /api/auth/login`
- [ ] Connect Dashboard/Profile page to `GET /api/user/me`
- [ ] Logout (clear token and redirect)
- [ ] Basic styling/UI

### Documentation (`/docs`)
- [ ] Update FRS PDF with ERD
- [ ] Update FRS PDF with UML diagrams
- [ ] Screenshot: Register page
- [ ] Screenshot: Login page
- [ ] Screenshot: Dashboard/Profile page
- [ ] Screenshot: Logout

### Mobile
- [ ] _(Deferred to next lab session)_

### Submission
- [ ] Verify GitHub repo is public
- [ ] Verify repo structure matches requirements
- [ ] Submit GitHub link on MS Teams
