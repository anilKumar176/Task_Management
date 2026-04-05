import { useState } from "react";

const TaskModal = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const handleSubmit = () => {
    if (!form.title) return alert("Title required");
    onCreate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <div className="flex justify-between mb-4">
          <h2>Create Task</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <input
          className="w-full border p-2 mb-2"
          placeholder="Title"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          className="w-full border p-2 mb-2"
          placeholder="Description"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <select
          className="w-full border p-2 mb-4"
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;