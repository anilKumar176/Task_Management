const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// server start
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));