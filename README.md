# Task Manager Backend API

A scalable RESTful backend built using Node.js and Express, featuring secure user authentication and structured architecture.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Password Hashing using bcrypt
- Protected Routes with Middleware
- Clean MVC Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

---

## 📂 Project Structure

src/
├── config/         # Database configuration  
├── controllers/    # Business logic  
├── models/         # Mongoose schemas  
├── routes/         # API routes  
├── middlewares/    # Auth middleware  
├── utils/          # Helper functions  
└── app.js          # Express app setup  

---

## 🔐 Authentication Flow

1. User registers → password is hashed
2. User logs in → JWT token is generated
3. Token is sent in headers for protected routes
4. Middleware verifies token and grants access

---

## 📡 API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Protected
- GET /api/test/profile

---

## ⚙️ Setup Instructions

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install