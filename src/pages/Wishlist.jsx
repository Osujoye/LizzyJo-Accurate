import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <section className="bg-dark text-pink-500 min-h-screen py-20 px-6 md:px-32 relative overflow-hidden">
      
      <div className="absolute inset-0 h-80 bg-gradient-to-b from-accent/10 via-dark to-dark -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-accent mb-10">
          Your Wishlist
        </h1>

        {wishlist.length === 0 && (
          <div className="text-center mt-20">
            <p className="text-gray-500 text-xl">Your wishlist is empty.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-dark border border-white/10 rounded-xl shadow-xl p-4 hover:scale-105 transition duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 rounded-lg object-cover shadow-lg"
              />

              <h3 className="text-2xl font-bold text-accent mt-4">
                {item.title}
              </h3>

              <p className="text-primary text-xl font-extrabold mt-1">
                {item.price}
              </p>

              <div className="flex justify-between items-center mt-5">
                <Link
                  to={`/product/${item.id}`}
                  className="text-accent font-bold hover:text-primary"
                >
                  View
                </Link>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-gray-500 hover:text-red-500 font-semibold"
                >
                  Remove ✖
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/products"
            className="bg-accent text-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:scale-105 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
