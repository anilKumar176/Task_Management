const EmptyState = ({ onAdd }) => {
  return (
    <div className="text-center p-10 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">No tasks found</h2>
      <p className="text-gray-500 mb-4">
        Get started by creating a new task!
      </p>

      <button
        onClick={onAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default EmptyState;