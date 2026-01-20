import React, { useState } from "react";

export default function Gallery() {
  const media = [
    // Images
    { type: "image", src: "src/assets/IMG-20251127-WA0002.jpg" },
    { type: "image", src: "src/assets/IMG-20251127-WA0003.jpg" },
    { type: "image", src: "src/assets/IMG-20251127-WA0004.jpg" },
    { type: "image", src: "src/assets/IMG-20251127-WA0005.jpg" },
    { type: "image", src: "src/assets/IMG-20251127-WA0006.jpg" },
    { type: "image", src: "src/assets/IMG-20251127-WA0007.jpg" },

    // Videos
    { type: "video", src: "src/assets/video1.mp4" },
    { type: "video", src: "src/assets/video2.mp4" },
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

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
          {media.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`gallery-${index}`}
                  className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg"
                    muted
                  />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="text-5xl">▶</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          )}
        </div>
      )}
    </section>
  );
}