import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const banner = "/hero.jpg";

  return (
    <section className="relative w-full h-[85vh] md:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-fit brightness-50"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl tracking-wide animate-fadeIn">
          LizzyJo Accurate
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-pink-300 font-medium max-w-xl animate-fadeIn delay-200">
          Luxury Human Hair • Premium Wigs & Bundles
        </p>

        <p className="mt-2 text-sm md:text-base text-gray-200 opacity-90 max-w-md animate-fadeIn delay-300">
          Step into elegance with 100% quality hair perfectly crafted for the confident woman.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          
          {/* Shop */}
          <a
            href="/products"
            className="px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-400 text-white shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Shop Now
          </a>
          <a
    href="/contact"
    className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-2xl transition transform hover:scale-105"
  >
    <FaEnvelope size={20} /> Enquire Now
  </a>

        </div>
      </div>
    </section>
  );
}
