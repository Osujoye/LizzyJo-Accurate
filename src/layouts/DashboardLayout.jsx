import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Images,
  LogOut,
  LampDesk,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 h-full w-64 bg-purple-500 text-white flex flex-col
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 border-b border-purple-800 flex justify-between items-center">
          <h1 className="text-lg font-semibold">LizzyJo Accurate Admin</h1>
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <NavItem to="/admin/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem to="/admin/upload" icon={<LampDesk size={20} />} label="Upload" />
            <NavItem to="/admin/gallery" icon={<Images size={20} />} label="Gallery" />
          </ul>
        </nav>

        <div className="p-4 border-t border-purple-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-purple-200 hover:bg-purple-800 rounded-lg"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
        <header className="bg-white shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Admin Panel
            </h2>
          </div>

          <NavLink to="/" className="text-gray-600 hover:text-purple-600">
            Home
          </NavLink>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive
              ? "bg-purple-700 text-white"
              : "text-purple-200 hover:bg-purple-800"
          }`
        }
      >
        {icon}
        {label}
      </NavLink>
    </li>
  );
}




// import { Outlet, useNavigate, NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Scissors,
//   Images,
//   LogOut,
//   LampDesk,
// } from "lucide-react";

// export default function DashboardLayout() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isAdmin");
//     navigate("/admin/login");
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       <aside className="w-64 bg-purple-500 text-white flex flex-col">
//         <div className="p-6 border-b border-purple-800">
//           <h1 className="text-l font-2xl">LizzyJo Accurate Admin</h1>
//         </div>

//         <nav className="flex-1 px-4 py-6">
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//                 to="/admin/dashboard"
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                     isActive
//                       ? "bg-purple-700 text-white"
//                       : "text-purple-200 hover:bg-purple-800"
//                   }`
//                 }
//               >
//                 <LayoutDashboard size={20} />
//                 Dashboard
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/admin/upload"
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                     isActive
//                       ? "bg-purple-700 text-white"
//                       : "text-purple-200 hover:bg-purple-800"
//                   }`
//                 }
//               >
//                 <LampDesk size={20} />
//                 Upload
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/admin/gallery"
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                     isActive
//                       ? "bg-purple-700 text-white"
//                       : "text-purple-200 hover:bg-purple-800"
//                   }`
//                 }
//               >
//                 <Images size={20} />
//                 Gallery
//               </NavLink>
//             </li>
//           </ul>
//         </nav>

//         <div className="p-4 border-t border-purple-800">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 w-full px-4 py-3 text-purple-200 hover:bg-purple-800 rounded-lg transition-colors"
//           >
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
// <NavLink to="/home">
//           <div className="flex items-center gap-4">
//             <span className="text-gray-600">Home</span>
//           </div>
//           </NavLink>
//         </header>

//         <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }
