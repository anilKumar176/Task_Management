import { useEffect, useState } from "react";
import { API } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // SINGLE fetch function (fixed)
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //  Search filter
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      
      {/*  Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">
         Task Manager Dashboard
      </h1>

      {/*  Search */}
      <div className="max-w-3xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search task..."
          className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/*  Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <TaskForm refresh={fetchTasks} />
      </div>

      {/*  Tasks */}
      <div className="mt-6 max-w-4xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : (
          <TaskList tasks={filteredTasks} refresh={fetchTasks} />
        )}
      </div>

      {/*  Toast */}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;