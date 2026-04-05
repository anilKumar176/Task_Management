const TaskCard = ({ task, onDelete, onUpdate }) => {
  const getColor = () => {
    if (task.status === "completed") return "bg-green-500";
    if (task.status === "in-progress") return "bg-yellow-500";
    return "bg-gray-500";
  };

  const changeStatus = () => {
    const next =
      task.status === "pending"
        ? "in-progress"
        : task.status === "in-progress"
        ? "completed"
        : "pending";

    onUpdate(task._id, { ...task, status: next });
  };

  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow-md flex justify-between items-center hover:scale-[1.02] transition">
      
      <div>
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-sm text-gray-300">{task.description}</p>
      </div>

      <div className="flex items-center gap-3">
        <span
          onClick={changeStatus}
          className={`text-white px-3 py-1 rounded-full text-xs cursor-pointer ${getColor()}`}
        >
          {task.status}
        </span>

        <button
          onClick={() => onDelete(task._id)}
          className="text-red-400 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;