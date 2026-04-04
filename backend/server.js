const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

//  middlewares
app.use(cors({
  origin: "*"
}));
app.use(express.json());

//  DB connection
connectDB();

//  test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

//  routes
app.use("/api/tasks", require("./routes/taskRoutes"));

//  dynamic PORT (IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));