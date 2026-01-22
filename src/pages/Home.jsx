import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-dark text-white">
      <Hero
        title="Transform Your Hair, Transform Your Confidence"
        subtitle="Premium wigs crafted to empower every woman"
        ctaText="Shop Now"
      />
      <section className="max-w-6xl mx-auto px-6 md:px-32 py-24 text-center grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
            Unmatched Quality
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            We craft real wigs using 100% virgin European, Vietnamese, Filipino,
            and Indian hair for a natural look, luxurious feel, and longevity.
          </p>
        </div>

        <div className="transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
            Beginner Friendly
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Natural rooted partings and realistic hairlines—no heavy plucking or
            gluing required. Perfect for every skill level.
          </p>
        </div>

        <div className="transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
            Customer First
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            An independent brand committed to quality, affordability, and fast
            delivery. Your satisfaction is our priority.
          </p>
        </div>
      </section>
    </div>
  );
}
