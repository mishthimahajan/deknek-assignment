import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/80 px-6 py-4 shadow-md backdrop-blur-md">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">TaskFlow</h1>
        <p className="text-sm text-slate-500">Welcome, {user?.name || "User"}</p>
      </div>
      <button
        onClick={handleLogout}
        className="rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
