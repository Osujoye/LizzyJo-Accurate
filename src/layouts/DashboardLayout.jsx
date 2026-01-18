import { Outlet, useNavigate, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Scissors,
  Images,
  LogOut,
  LampDesk,
} from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <aside className="w-64 bg-purple-900 text-white flex flex-col">
        <div className="p-6 border-b border-purple-800">
          <h1 className="text-2xl font-bold">LizzyJoe Admin</h1>
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-700 text-white"
                      : "text-purple-200 hover:bg-purple-800"
                  }`
                }
              >
                <LayoutDashboard size={20} />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/upload"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-700 text-white"
                      : "text-purple-200 hover:bg-purple-800"
                  }`
                }
              >
                <LampDesk size={20} />
                Upload
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/gallery"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-700 text-white"
                      : "text-purple-200 hover:bg-purple-800"
                  }`
                }
              >
                <Images size={20} />
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-purple-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-purple-200 hover:bg-purple-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
