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
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h2 className="mb-2 text-3xl font-bold text-slate-800">Welcome Back</h2>
        <p className="mb-6 text-slate-500">Login to continue.</p>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-full rounded-xl border p-3 outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 w-full rounded-xl border p-3 outline-none"
        />
                <button className="w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-slate-800">
          Login
        </button>

        <p className="mt-4 text-center text-sm text-slate-600">
          Don’t have an account? <Link to="/signup" className="font-semibold text-blue-600">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;