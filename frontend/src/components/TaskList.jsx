import { API } from "../api";

const getColor = (status) => {
  if (status === "completed") return "bg-green-500";
  if (status === "in-progress") return "bg-yellow-500";
  return "bg-red-500";
};
// Task List 
const TaskList = ({ tasks, refresh }) => {

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    refresh();
  };

  const handleStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    refresh();
  };

  return (
    <div className="grid gap-4">

      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-gray-800 p-4 rounded-xl shadow-md"
        >
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-gray-400">{task.description}</p>

          <div className="flex justify-between items-center mt-3">

            <span className={`px-3 py-1 rounded ${getColor(task.status)}`}>
              {task.status}
            </span>

            <select
              className="bg-gray-700 p-1 rounded"
              value={task.status}
              onChange={(e) =>
                handleStatus(task._id, e.target.value)
              }
            >
              <option value="pending">pending</option>
              <option value="in-progress">in-progress</option>
              <option value="completed">completed</option>
            </select>

            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>

          </div>
        </div>
      ))}

    </div>
  );
};

export default TaskList;