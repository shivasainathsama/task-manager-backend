# 📘 Backend Notes (Task Manager API)

---

## 🧠 1. Express Basics

* Express is a minimal Node.js framework for building APIs
* Handles HTTP requests and responses

### Basic Flow:

```
Client → Route → Controller → Response
```

### Important:

```js
app.use(express.json());
```

* Parses incoming JSON
* Without this → `req.body` is undefined ❌

---

## 🧱 2. MVC Architecture

* **Model** → Database structure (Mongoose schemas)
* **View** → Not used (since backend API)
* **Controller** → Business logic
* **Routes** → Define endpoints

### Why use MVC?

* Clean code
* Scalable
* Industry standard

---

## 🗄️ 3. MongoDB + Mongoose

* MongoDB is a NoSQL database
* Mongoose is an ODM (Object Data Modeling)

### Example Schema:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
```

### Concepts:

* Collection = Table
* Document = Row
* Schema = Structure

---

## 🔐 4. Authentication

### Password Hashing (bcrypt)

```js
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
```

### Why?

* Never store plain passwords ❌
* Hashing is one-way (secure) ✔️

---

### Password Verification

```js
await bcrypt.compare(password, user.password);
```

---

## 🔑 5. JWT (JSON Web Token)

### What is JWT?

* A token used for authentication (stateless)

### Generate Token:

```js
jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  expiresIn: "7d"
});
```

### Structure:

```
HEADER.PAYLOAD.SIGNATURE
```

### Sent in Headers:

```
Authorization: Bearer <token>
```

---

## 🔒 6. Middleware

### What is Middleware?

* Function that runs before controller

### Example:

```js
const protect = (req, res, next) => {
  // verify token
  next();
};
```

### Usage:

```js
router.get("/profile", protect, controller);
```

### Why?

* Security
* Code reuse
* Cleaner controllers

---

## ⚠️ 7. Error Handling

### try-catch:

```js
try {
  // logic
} catch (error) {
  res.status(500).json({ message: error.message });
}
```

### finally:

* Always runs
* Used for cleanup (rare in Express)

---

## 🌍 8. Environment Variables

### `.env`

```
MONGO_URI=your_uri
JWT_SECRET=your_secret
```

### Access:

```js
process.env.MONGO_URI
```

### Why?

* Security
* Flexibility

---

## 📡 9. REST API Basics

### Methods:

* GET → fetch data
* POST → create data
* PUT → update data
* DELETE → remove data

### Current APIs:

* POST /api/auth/register
* POST /api/auth/login
* GET /api/test/profile (protected)

---

## 🐞 10. Common Errors

### ❌ req.body undefined

* Missing:

```js
app.use(express.json());
```

---

### ❌ MongoDB ECONNREFUSED

* IP not whitelisted
* DNS issue

---

### ❌ Authentication failed

* Wrong DB username/password

---

### ❌ Cannot GET route

* Route not registered in app.js

---

### ❌ Connection refused

* Server not running

---

## 🎯 Interview Summary

> Built a RESTful backend using Node.js and Express with MongoDB. Implemented authentication using bcrypt for password hashing and JWT for secure access. Structured the project using MVC and created protected routes using middleware.

---

## 🚀 Key Learnings

* Backend request flow
* Secure authentication
* JWT-based authorization
* Clean project structure
* Debugging real-world issues
