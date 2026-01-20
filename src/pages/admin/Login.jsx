import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Get credentials from environment variables
  const CORRECT_EMAIL = import.meta.env.VITE_ADMIN_EMAIL?.trim().toLowerCase();
  const CORRECT_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD?.trim();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Normalize input
    const inputEmail = email.trim().toLowerCase();
    const inputPassword = password.trim();

    if (inputEmail === CORRECT_EMAIL && inputPassword === CORRECT_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-pink-50 via-white to-purple-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
