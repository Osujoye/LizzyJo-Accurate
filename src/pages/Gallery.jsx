import React, { useState } from "react";

export default function Gallery() {
  const images = [
    "src/assets/IMG-20251127-WA0002.jpg",
    "src/assets/IMG-20251127-WA0003.jpg",
    "src/assets/IMG-20251127-WA0004.jpg",
    "src/assets/IMG-20251127-WA0005.jpg",
    "src/assets/IMG-20251127-WA0006.jpg",
    "src/assets/IMG-20251127-WA0007.jpg",
    "src/assets/IMG-20251127-WA0008.jpg",
    "src/assets/IMG-20251127-WA0009.jpg",
    "src/assets/IMG-20251127-WA0010.jpg",
    "src/assets/IMG-20251127-WA0011.jpg",
    "src/assets/IMG-20251127-WA0012.jpg",
    "src/assets/IMG-20251127-WA0013.jpg",
    "src/assets/IMG-20251127-WA0014.jpg",
    "src/assets/IMG-20251127-WA0015.jpg",
    "src/assets/IMG-20251127-WA0016.jpg",
    "/Million Braids Wig.jpeg",
    "/Straight Back Ghana Weaving Wig.jpeg",
    "/Full Lace Knotless Braid Wig.jpeg",
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="bg-dark text-white py-24 px-6 md:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-300">
          Gallery / Lookbook
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-12">
          Real clients, signature builds, and custom styles showcasing the
          luxury and quality of our wigs.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`look-${index + 1}`}
                className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
