import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL;

/* MOTION VARIANTS */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { y: 25, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function UploadProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ENV SAFETY */
  useEffect(() => {
    if (!API_URL) {
      Swal.fire({
        icon: "error",
        title: "Configuration Error",
        text: "API URL is missing. Check your .env file.",
      });
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => preview && URL.revokeObjectURL(preview);
  }, [preview]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !image) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Title, price and image are required",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", Number(price));
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/admin/add-service`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      Swal.fire({
        icon: "success",
        title: "Uploaded!",
        text: "Product uploaded successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/products");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: err.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="md:px-32 bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-16 pb-20 px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="max-w-xl mx-auto bg-white/70 backdrop-blur-xl border border-pink-100 rounded-3xl p-8 shadow-xl"
        variants={item}
      >
        <motion.h1
          className="text-3xl font-extrabold text-center text-pink-600 mb-6"
          variants={item}
        >
          Upload New Product
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          variants={container}
        >
          <motion.input
            variants={item}
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-200"
          />

          <motion.textarea
            variants={item}
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full p-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-200"
          />

          <motion.input
            variants={item}
            type="number"
            placeholder="Price (₦)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-200"
          />

          <motion.input
            variants={item}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 rounded-xl border border-pink-200"
          />

          {preview && (
            <motion.img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-xl border border-pink-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Product"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
