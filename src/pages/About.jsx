import React from "react";

export default function About() {
  return (
    <section className="bg-dark text-pink-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/20 via-dark to-dark -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-accent">
          Our Legacy, Your Luxury
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
          At <strong>Lizzyjoaccurate Beauty Collection</strong>, over{" "}
          <strong>5 years</strong> and <strong>3 generations</strong> of mastery come together
          to craft wigs that are more than hair—they’re confidence, artistry, and pure elegance.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-10 pt-10 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">2,500+</div>
            <div className="text-sm md:text-base font-bold text-gray-700 mt-1">Happy Clients</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">1,000+</div>
            <div className="text-sm md:text-base font-bold text-gray-700 mt-1">Wigs Sold</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">4.9★</div>
            <div className="text-sm md:text-base font-bold text-gray-700 mt-1">Customer Rating</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Values</h2>

            <ul className="list-disc list-inside space-y-3 text-gray-500 text-lg">
              <li>Excellence: Only the finest virgin hair enters our collection.</li>
              <li>Empowerment: Every woman deserves hair that elevates her beauty.</li>
              <li>Integrity: 100% transparency — no mixed fibers, no shortcuts.</li>
              <li>Innovation: Designs crafted to match modern luxury beauty trends.</li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src="/brazilian lace.jpeg"
              alt="Luxury Wig"
              className="w-full rounded-xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="mt-20 text-left">
          <h2 className="text-3xl font-bold mb-6 text-accent">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Every wig begins with **premium virgin hair**, carefully sourced and inspected
            for quality. Our experts create natural hairlines, seamless partings,
            and perfectly tailored fits — ultra-light, natural-looking, and luxurious.
          </p>
        </div>
      </div>
    </section>
  );
}
