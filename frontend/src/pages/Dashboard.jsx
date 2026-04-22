import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
   const fetchTasks = async () => {
    try {
      const res = await api.get("/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await api.post("/api/tasks", { title, description });
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };
  const handleToggle = async (id) => {
    try {
      await api.put(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
   return (
    <div className="min-h-screen px-4 py-6 md:px-10">
      <Navbar />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-lg lg:col-span-1">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Add New Task</h2>
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 w-full rounded-xl border p-3"
            />
            <textarea
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-4 w-full rounded-xl border p-3"
              rows="4"
            />
            <button className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
              Add Task
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Your Tasks</h2>
          <div className="grid gap-4">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className="rounded-2xl bg-white p-6 text-slate-500 shadow">
                No tasks yet. Add your first task.
              </div>
            )}
          </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;