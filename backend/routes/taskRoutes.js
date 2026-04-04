const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

router.post("/", createTask);      // Creat
router.get("/", getTasks);         // Read
router.put("/:id", updateTask);    // Update
router.delete("/:id", deleteTask); // Delete

module.exports = router;