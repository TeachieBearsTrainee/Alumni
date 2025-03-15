# Frontend API Integration Guide

## Base URL

```
http://localhost:6001/api/v1
```

---

## 1. **Register User API**

### Endpoint

```
POST http://localhost:6001/api/v1/register
```

### Request Body

```json
{
    "email": "user@example.com", //required
    "password": "securePassword", //required
    "fullname": "John Doe", 
    "bio": "Software Developer",
    "profilePic": "https://example.com/profile.jpg",  
    "degree": "BSc IT", //required
    "branch": "Computer Science", //required
    "graduationYear": 2025, //required 
    "graduationCertificate": "https://example.com/certificate.jpg" //required
}
```

### Expected Responses

**Success:**

- **Status Code:** `201`
- **Response Body:**

```json
{
    "status": 200,
    "data": {
        "user": { ... },
        "student": { ... }
    },
    "message": "User registered successfully"
}
```

**Errors:**

- **400:** Missing required fields (e.g., `email`, `password`, etc.)
- **409:** Email already exists
- **500:** Internal server error

---

## 2. **Login User API**

### Endpoint

```
POST http://localhost:6001/api/v1/login
```

### Request Body

```json
{
    "email": "user@example.com",
    "password": "securePassword"
}
```

### Expected Responses

**Success:**

- **Status Code:** `200`
- **Response Body:**

```json
{
    "status": 200,
    "data": {
        "user": { ... },
        "accessToken": "<ACCESS_TOKEN>",
        "refreshToken": "<REFRESH_TOKEN>"
    },
    "message": "User logged In Successfully"
}
```

**Errors:**

- **400:** Missing required fields (`email`, `password`)
- **404:** Invalid credentials
- **401:** Incorrect password

---

## 3. **Logout User API**

### Endpoint

```
POST http://localhost:6001/api/v1/logout
```

### Headers

```
Authorization: Bearer <ACCESS_TOKEN>
```

### Expected Responses

**Success:**

- **Status Code:** `200`
- **Response Body:**

```json
{
    "status": 200,
    "message": "User logged out successfully"
}
```

**Errors:**

- **500:** Internal server error

---

## Important Notes

1. **Validation Errors:**

   - `email` must be a valid format (e.g., `@gmail.com`, `@yahoo.com`, etc.)
   - `password` must be between **8-12 characters**
   - `fullname` must be between **3-50 characters**
   - `bio` must be less than **500 characters**
   - `graduationYear` should be between **2000-2100**

2. **Cookies Handling:**

   - Cookies are set for `accessToken` and `refreshToken` upon successful login.
   - These cookies must be included in subsequent authenticated requests.

3. **Data Flow:**

   - On successful registration, the frontend should store the `accessToken` and `refreshToken` securely.
   - Ensure to handle expired tokens and refresh the access token when needed.

