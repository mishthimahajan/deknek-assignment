// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//    const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
//       >
//         <h2 className="mb-2 text-3xl font-bold text-slate-800">Welcome Back</h2>
//         <p className="mb-6 text-slate-500">Login to continue.</p>

//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="mb-4 w-full rounded-xl border p-3 outline-none"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="mb-4 w-full rounded-xl border p-3 outline-none"
//         />
//                 <button className="w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-slate-800">
//           Login
//         </button>

//         <p className="mt-4 text-center text-sm text-slate-600">
//           Don’t have an account? <Link to="/signup" className="font-semibold text-blue-600">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-87.5 bg-white/70 shadow-2xl backdrop-blur-xl md:grid-cols-2">
        <div className="hidden bg-linear-to-br from-indigo-600 via-violet-600 to-pink-500 p-10 text-white md:block">
          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome back to TaskFlow
          </h1>
          <p className="mt-4 text-white/85">
            Manage your tasks, track your progress and stay productive with a clean dashboard.
          </p>

          <div className="mt-10 rounded-3xl bg-white/15 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-widest text-white/70">
              Productivity
            </p>
            <h2 className="mt-2 text-2xl font-bold">Organize smarter</h2>
            <p className="mt-2 text-sm text-white/80">
              Secure login, personal tasks and real-time database storage.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Login</h2>
          <p className="mt-2 text-slate-500">Enter your credentials to continue.</p>

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              required
            />
          </div>

          <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-indigo-600 to-pink-500 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]">
            Login
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-bold text-indigo-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;