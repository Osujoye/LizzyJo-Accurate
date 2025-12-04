import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 via-white to-purple-50 sticky z-50 p-5 border-b border-gray-200 mt-12 py-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center space-x-3 select-none">
            <img className="w-16 h-14 rounded-full" src="/logo.jpg" alt="" />
          </Link>
          <div className="text-center text-gray-500 mt-6 text-sm">
            © {new Date().getFullYear()} Lizzyjoaccurate Beauty Collection. All
            Rights Reserved.
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://www.instagram.com/lizzyjoaccurate_collection?igsh=YXM3M3UzM25rcThz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-900 transition text-red-700"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@accurate3545?_r=1&_t=ZS-91qmLKvFmQZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black-700 transition text-black"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://wa.me/2349066522337"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition text-green-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/lizzyjoaccurate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition text-blue-500"
            aria-label="Facebook"
          > 
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
