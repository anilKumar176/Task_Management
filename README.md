#  Task Management Application (MERN Stack)

##  Overview

This is a full-stack Task Management Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows users to create, manage, update, and delete tasks with a clean and user-friendly interface.

---

##  Live Demo



---

##  Features

###  Backend (Node.js + Express)

* Create Task API
* Get All Tasks API
* Update Task API
* Delete Task API
* RESTful API design
* Proper error handling

###  Database (MongoDB)

* Task Schema includes:

  * Title (required)
  * Description
  * Status (pending, in-progress, completed)
  * CreatedAt timestamp

###  Frontend (React)

* Add new tasks
* View all tasks
* Update task status
* Delete tasks
* Search functionality 
* Loading state 
* Toast notifications 
* Modern UI with Tailwind CSS 

---

##  Project Structure

###  Backend

backend/

* config/
* controllers/
* models/
* routes/
* server.js

###  Frontend

frontend/

* src/

  * components/
  * App.jsx
  * api.js

---

##  Tech Stack

* **Frontend:** React.js, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Other:** React Hot Toast

---

##  Getting Started

###  Clone Repository

git clone https://github.com/anilKumar176/Task_Management.git
cd Task_Management

---

### Backend Setup

cd backend
npm install

Create `.env` file:
MONGO_URI=your_mongodb_atlas_url

Run backend:
npm run dev

---

###  Frontend Setup

cd frontend
npm install
npm start

---

## API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /api/tasks     | Create task   |
| GET    | /api/tasks     | Get all tasks |
| PUT    | /api/tasks/:id | Update task   |
| DELETE | /api/tasks/:id | Delete task   |

---

##  Key Highlights

* Clean and modular MVC architecture
* Use of async/await
* Proper validation and error handling
* Reusable React components
* Improved UI/UX with Tailwind CSS

---

## Assumptions

* Single-user application
* No authentication required (as per task scope)
* Default task status is "pending"

---

##  Screenshots (Optional)

(Add screenshots here for better presentation)

---

##  Future Improvements

* User Authentication (JWT)
* Pagination and filtering
* Dashboard with analytics
* Deployment improvements

---

##  Author

**Mudavath Anil Kumar**
MCA Student | MERN Stack Developer

---

##  Conclusion

This project demonstrates strong understanding of full-stack development using the MERN stack, focusing on clean code, scalability, and user experience.

---
