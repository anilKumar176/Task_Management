import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  // FETCH DATA
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE
  const handleCreate = async () => {
    if (!form.title) return alert("Title required");

    await createTask(form);
    setForm({ title: "", description: "", status: "pending" });
    setOpen(false);
    fetchTasks();
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  // UPDATE STATUS
  const changeStatus = async (task) => {
    const next =
      task.status === "pending"
        ? "in-progress"
        : task.status === "in-progress"
        ? "completed"
        : "pending";

    await updateTask(task._id, { ...task, status: next });
    fetchTasks();
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  const getColor = (status) => {
    if (status === "completed") return "bg-green-500";
    if (status === "in-progress") return "bg-orange-500";
    return "bg-gray-400";
  };

  return (
    <div className="min-h-screen bg-red-400 flex justify-center items-center p-6">

      <div className="bg-white w-[380px] rounded-xl shadow-lg p-5">

        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Task Dashboard</h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-3 py-1 text-xs rounded"
          >
            + Add Task
          </button>
        </div>

        {/* FILTER */}
        <div className="flex text-xs border rounded mb-4 overflow-hidden">
          {["all", "pending", "in-progress", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-1 ${
                filter === f ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              {f === "all"
                ? "All"
                : f === "in-progress"
                ? "In Progress"
                : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* TASK LIST */}
        <div className="space-y-3">
          {loading ? (
            <p>Loading...</p>
          ) : filteredTasks.length === 0 ? (
            <p className="text-center text-gray-400 text-sm">
              No tasks found
            </p>
          ) : (
            filteredTasks.map((t) => (
              <div
                key={t._id}
                className="border rounded p-3 flex justify-between"
              >
                <div>
                  <h4 className="text-sm font-medium">{t.title}</h4>
                  <p className="text-xs text-gray-500">{t.description}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <span
                    onClick={() => changeStatus(t)}
                    className={`cursor-pointer text-white text-xs px-2 py-1 rounded ${getColor(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>

                  <button
                    onClick={() => handleDelete(t._id)}
                    className="text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[380px] p-5 rounded">

            <div className="flex justify-between mb-3">
              <h2>Create Task</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <input
              placeholder="Title"
              className="w-full border p-2 mb-2"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              className="w-full border p-2 mb-2"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <select
              className="w-full border p-2 mb-3"
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <div className="flex justify-end gap-2">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                onClick={handleCreate}
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;