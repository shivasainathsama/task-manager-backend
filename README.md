# 🚀 Task Manager Backend API

A production-ready backend API for managing tasks with authentication and authorization.

---

## 🧠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (Password Hashing)

---

## ✨ Features

* 🔐 User Registration & Login
* 🔑 JWT-based Authentication
* 🛡️ Protected Routes (Middleware)
* 📦 RESTful API Design
* ⚡ Scalable MVC Architecture
* 🌍 Environment-based Configuration

---

## 📁 Project Structure

```
src/
 ├── config/        # DB connection
 ├── controllers/   # Business logic
 ├── middlewares/   # Auth middleware
 ├── models/        # Mongoose schemas
 ├── routes/        # API routes
 ├── utils/         # Helper functions
 └── app.js         # App setup

server.js           # Entry point
```

---

## 🔧 Installation

```bash
git clone https://github.com/YOUR_USERNAME/task-manager-backend.git
cd task-manager-backend
npm install
```

---

## ⚙️ Environment Variables

Create `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
```

---

## ▶️ Run the Server

```bash
npm run dev
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### Protected

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/test/profile | Get user profile |

---

## 🔐 Authentication

Pass token in headers:

```
Authorization: Bearer <your_token>
```

---

## 🧪 Testing

Use:

* Thunder Client
* Postman

---

## 🚀 Future Improvements

* Task CRUD APIs
* Role-based access control
* Pagination & filtering
* Rate limiting
* Docker support

---

## 👨‍💻 Author

Shiva Sainath Sama

---

## ⭐ If you like this project

Give it a star on GitHub!
