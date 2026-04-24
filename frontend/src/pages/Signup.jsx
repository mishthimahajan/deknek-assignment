// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, formData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       navigate("/dashboard");
//     } catch (err) {
//   console.log("Signup error:", err);
//   console.log("Response data:", err.response?.data);
//   console.log("Status:", err.response?.status);
//   setError(err.response?.data?.message || "Signup failed");
// }
//      };

//   return (
//     <div className="flex min-h-screen items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
//       >
//         <h2 className="mb-2 text-3xl font-bold text-slate-800">Create Account</h2>
//         <p className="mb-6 text-slate-500">Start managing your tasks smarter.</p>

//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mb-4 w-full rounded-xl border p-3 outline-none"
//         />
//          <input
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

//         <button className="w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-slate-800">
//           Sign Up
//         </button>

//         <p className="mt-4 text-center text-sm text-slate-600">
//           Already have an account? <Link to="/login" className="font-semibold text-blue-600">Login</Link>
//         </p>
//          </form>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-87.5 bg-white/70 shadow-2xl backdrop-blur-xl md:grid-cols-2">
        <div className="hidden bg-linear-to-br from-slate-900 via-indigo-700 to-purple-600 p-10 text-white md:block">
          <h1 className="text-4xl font-extrabold leading-tight">
            Create your productivity workspace
          </h1>
          <p className="mt-4 text-white/80">
            Build habits, manage tasks and keep your work organized beautifully.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
              ✅ Secure JWT authentication
            </div>
            <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
              ✅ MongoDB database integration
            </div>
            <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
              ✅ Personal protected dashboard
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Create Account
          </h2>
          <p className="mt-2 text-slate-500">Start managing your tasks smarter.</p>

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              required
            />

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
            Sign Up
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-indigo-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
