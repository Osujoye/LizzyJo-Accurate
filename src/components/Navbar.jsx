import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-sm md:text-base  text-gray-700 hover:bg-gradient-to-r from-pink-500 to-purple-400 rounded-lg hover:px-1 hover:py-1 hover:text-accent hover:text-white transition-colors duration-300 font-medium"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-linear-to-br from-pink-50 via-white to-purple-50 p-5 border-b border-gray-200 sticky top-0 z-50 shadow-sm flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3 select-none">
        <img className="w-16 h-14 rounded-full" src="/logo.jpg" alt="" />
        {/* <div className="relative">
          <div className="w-6 h-6 bg-linear-to-br from pink-400 to purple-600 rounded-full blur-[1px]"></div>
          <div className="absolute -right-2 top-1 w-5 h-2 bg-linear-to-r from-purple-500 to-pink-400 rounded-full rotate-12"></div>
          <div className="absolute -left- bottom-0 w-4 h-2 bg-linear-to-r from-pink-500 to-purple-400 rounded-full rotate-12"></div>
        </div>
        <span className="text-2xl font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 tracking-wide">
          LizzyJo
        </span> */}
      </Link>
      {/* <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <span className="font-bold text-white text-lg md:text-xl">L</span>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-pink-300 italic">
            LizzyJo
          </h1>
        </div>
      </div> */}

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/why">Why Us</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md bg-black transition"
        onClick={() => setOpen(!open)}
        aria-label="menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 right-0 top-20 bg-black/90 py-6 md:hidden shadow-lg">
          <div className="flex flex-col gap-4 max-w-md mx-auto items-center">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/why" onClick={() => setOpen(false)}>
              Why Us
            </NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
