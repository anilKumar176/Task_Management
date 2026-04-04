# 🚀 Task Management Application (MERN Stack)

##  Overview

This is a full-stack Task Management Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The application allows users to manage tasks efficiently with a clean and user-friendly interface.

---

##  Features

###  Backend (Node.js + Express)

* Create Task
* Get All Tasks
* Update Task (status change)
* Delete Task
* RESTful API design
* Proper error handling

###  Database (MongoDB)

* Task Schema:

  * Title (required)
  * Description
  * Status (pending, in-progress, completed)
  * CreatedAt (auto-generated)

###  Frontend (React)

* Add new task
* View all tasks
* Update task status
* Delete task
* Search functionality 
* Loading state 
* Toast notifications 
* Modern UI using Tailwind CSS 

---

##  Project Structure

### Backend

backend/

* config/
* controllers/
* models/
* routes/
* server.js

### Frontend

frontend/

* src/

  * components/
  * App.jsx
  * api.js

---

## Tech Stack

* **Frontend:** React.js, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Other:** React Hot Toast

---

##  Getting Started

### Clone Repository

git clone https://github.com/your-username/task-manager.git
cd task-manager

---

###  Backend Setup

cd backend
npm install

Create `.env` file:
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager

Run backend:
npm run dev

---

### Frontend Setup

cd frontend
npm install
npm start

---

##  API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /api/tasks     | Create task   |
| GET    | /api/tasks     | Get all tasks |
| PUT    | /api/tasks/:id | Update task   |
| DELETE | /api/tasks/:id | Delete task   |

---

## Key Highlights

* Clean and modular MVC architecture
* Use of async/await for better readability
* Proper error handling and validation
* Reusable React components
* Improved user experience with modern UI

---

## Assumptions

* No authentication required (as per task scope)
* Status defaults to "pending"
* Single-user application

---

##  Screenshots (Optional)

(Add screenshots here if available)

---

##  Future Improvements

* User Authentication (JWT)
* Pagination and filtering
* Dashboard with analytics
* Deployment (Vercel / Render)

---

## Author

**Mudavath Anil Kumar**
MCA Student | MERN Stack Developer

---

## Conclusion

This project demonstrates strong understanding of MERN stack fundamentals, clean code practices, and frontend-backend integration.

---
