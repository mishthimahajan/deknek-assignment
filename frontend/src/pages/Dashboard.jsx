// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import TaskCard from "../components/TaskCard";

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const token = localStorage.getItem("token");
//   const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//    const fetchTasks = async () => {
//     try {
//       const res = await api.get("/api/tasks");
//       setTasks(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddTask = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;

//     try {
//       await api.post("/api/tasks", { title, description });
//       setTitle("");
//       setDescription("");
//       fetchTasks();
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleToggle = async (id) => {
//     try {
//       await api.put(`/api/tasks/${id}`);
//       fetchTasks();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/api/tasks/${id}`);
//       fetchTasks();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);
//    return (
//     <div className="min-h-screen px-4 py-6 md:px-10">
//       <Navbar />

//       <div className="mt-8 grid gap-8 lg:grid-cols-3">
//         <div className="rounded-3xl bg-white p-6 shadow-lg lg:col-span-1">
//           <h2 className="mb-4 text-2xl font-bold text-slate-800">Add New Task</h2>
//           <form onSubmit={handleAddTask}>
//             <input
//               type="text"
//               placeholder="Task title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mb-4 w-full rounded-xl border p-3"
//             />
//             <textarea
//               placeholder="Task description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="mb-4 w-full rounded-xl border p-3"
//               rows="4"
//             />
//             <button className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
//               Add Task
//             </button>
//           </form>
//         </div>

//         <div className="lg:col-span-2">
//           <h2 className="mb-4 text-2xl font-bold text-slate-800">Your Tasks</h2>
//           <div className="grid gap-4">
//             {tasks.length > 0 ? (
//               tasks.map((task) => (
//                 <TaskCard
//                   key={task._id}
//                   task={task}
//                   onToggle={handleToggle}
//                   onDelete={handleDelete}
//                 />
//               ))
//             ) : (
//               <div className="rounded-2xl bg-white p-6 text-slate-500 shadow">
//                 No tasks yet. Add your first task.
//               </div>
//             )}
//           </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
      console.log(error);
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
      console.log(error);
    }
  };

  const handleToggle = async (id) => {
    try {
      await api.put(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const completed = tasks.filter((task) => task.status === "completed").length;
  const pending = tasks.length - completed;

  return (
    <div className="min-h-screen px-4 py-6 md:px-10">
      <Navbar />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-linear-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl">
          <p className="text-sm text-white/70">Total Tasks</p>
          <h2 className="mt-2 text-4xl font-extrabold">{tasks.length}</h2>
        </div>

        <div className="rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-500">Completed</p>
          <h2 className="mt-2 text-4xl font-extrabold text-green-600">
            {completed}
          </h2>
        </div>

        <div className="rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-500">Pending</p>
          <h2 className="mt-2 text-4xl font-extrabold text-yellow-500">
            {pending}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <form
          onSubmit={handleAddTask}
          className="rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur lg:col-span-1"
        >
          <h2 className="text-2xl font-extrabold text-slate-900">
            Add New Task
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Create a task and track your progress.
          </p>

          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-6 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <button className="mt-5 w-full rounded-2xl bg-linear-to-r from-indigo-600 to-pink-500 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02]">
            Add Task
          </button>
        </form>

        <div className="lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Your Tasks
            </h2>
          </div>

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
              <div className="rounded-3xl bg-white/80 p-10 text-center shadow-xl backdrop-blur">
                <h3 className="text-xl font-bold text-slate-800">
                  No tasks yet
                </h3>
                <p className="mt-2 text-slate-500">
                  Add your first task to start organizing your work.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;