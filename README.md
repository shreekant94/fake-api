# 🚀 Fake REST API with Node.js & Express

A lightweight fake REST API built with Node.js and Express for frontend development, testing, or learning. Simulates CRUD operations on users with no database required — perfect for prototyping!

---

## ✨ Features

- ✅ RESTful endpoints for `/users`
- ✅ GET, POST, PUT, DELETE support
- ✅ CORS enabled — works with frontend apps (React, Vue, etc.)
- ✅ In-memory “database” (no setup needed)
- ✅ Easy to extend (add `/posts`, `/comments`, etc.)
- ✅ Delay simulation for loading states

---

## 🛠️ Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/YOUR_USERNAME/fake-api-nodejs.git
   cd fake-api-nodejs

2. Install dependencies:
   npm install

3. Start the server:
   npm run dev 

4. API will be running at:
    👉 http://localhost:3000

🌐 Endpoints
GET
/
Welcome message
GET
/users
Get all users
GET
/users/:id
Get user by ID
POST
/users
Create new user
PUT
/users/:id
Update user
DELETE
/users/:id
Delete user
GET
/slow-users
Simulated 2s delay    