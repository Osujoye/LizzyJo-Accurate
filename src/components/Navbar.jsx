import React, { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiHome,
  HiInformationCircle,
  HiShoppingBag,
  HiSparkles,
  HiPhotograph,
  HiPhone,
} from "react-icons/hi";

const NavItem = ({ to, icon, label, onClick }) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300
      ${
        isActive
          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
          : "text-gray-700 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white"
      }`
    }
  >
    {icon}
    {label}
  </RouterNavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            <NavItem to="/" icon={<HiHome />} label="Home" />
            <NavItem to="/products" icon={<HiShoppingBag />} label="Products" />
            <NavItem to="/gallery" icon={<HiPhotograph />} label="Gallery" />
            <NavItem to="/about" icon={<HiInformationCircle />} label="About" />
            <NavItem to="/why" icon={<HiSparkles />} label="Why Us" />
            <NavItem to="/contact" icon={<HiPhone />} label="Contact" />
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
          >
            <HiMenuAlt3 size={26} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button onClick={() => setOpen(false)}>
              <HiX size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 p-4">
            <NavItem
              to="/"
              icon={<HiHome />}
              label="Home"
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/products"
              icon={<HiShoppingBag />}
              label="Products"
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/gallery"
              icon={<HiPhotograph />}
              label="Gallery"
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/about"
              icon={<HiInformationCircle />}
              label="About"
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/why"
              icon={<HiSparkles />}
              label="Why Us"
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/contact"
              icon={<HiPhone />}
              label="Contact"
              onClick={() => setOpen(false)}
            />
          </nav>
        </div>
      </div>
    </>
  );
}
