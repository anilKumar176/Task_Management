import { useState } from "react";
import { API } from "../api";
import toast from "react-hot-toast";

const TaskForm = ({ refresh }) => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!task.title.trim()) {
      return toast.error("Title is required");
    }

    try {
      setLoading(true);

      await API.post("/tasks", task);

      toast.success("Task Added");

      setTask({ title: "", description: "" });
      refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add task ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Title */}
      <input
        className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      {/* Description */}
      <input
        className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      {/* Button */}
      <button
        disabled={loading}
        className={`w-full p-2 rounded font-semibold transition ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>

    </form>
  );
};

export default TaskForm;