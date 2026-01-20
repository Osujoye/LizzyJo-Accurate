import React, { useState } from "react";

export default function AdminGalleryLocal() {
  const [images, setImages] = useState([]); // Store images locally
  const [selectedImg, setSelectedImg] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewImage(file);

    // Create a temporary preview URL
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  // Add image to local gallery
  const handleUpload = (e) => {
    e.preventDefault();
    if (!newImage) return alert("Select an image first!");

    setImages([preview, ...images]); // Add the preview to the gallery
    setNewImage(null);
    setPreview(null);
  };

  // Delete image from gallery
  const handleDelete = (img) => {
    if (window.confirm("Delete this image?")) {
      setImages(images.filter((i) => i !== img));
    }
  };

  return (
    <section className="bg-dark text-white py-24 px-6 md:px-32 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-300">
          Admin Gallery
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-12">
          Upload customer looks or new styles. Images are stored locally in this session.
        </p>

        {/* Upload Form */}
        <form onSubmit={handleUpload} className="mb-12 space-y-4 max-w-md mx-auto">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 rounded-lg border border-white/20 bg-dark text-white"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border border-white/20"
            />
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:opacity-90 transition"
          >
            Add Image
          </button>
        </form>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer"
            >
              <img
                src={img}
                alt={`look-${index + 1}`}
                className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg"
                onClick={() => setSelectedImg(img)}
              />
              {/* Delete button */}
              <button
                onClick={() => handleDelete(img)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm"
              >
                Delete
              </button>
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
