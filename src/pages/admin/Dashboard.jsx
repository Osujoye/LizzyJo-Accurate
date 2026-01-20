import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [editingId, setEditingId] = useState(null);

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");

  /* SAFETY CHECK */
  useEffect(() => {
    if (!API_URL) {
      Swal.fire({
        icon: "error",
        title: "Configuration Error",
        text: "API URL is missing. Check your .env file.",
      });
    }
  }, []);

  /* FETCH PRODUCTS */
  const fetchProducts = async () => {
    try {
      const res = await
       fetch (`${API_URL}/services`);
      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      setProducts(data);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to load products",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (API_URL) fetchProducts();
  }, []);

  /* DELETE PRODUCT */
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ec4899",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `${API_URL}/admin/services/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error();

      setProducts(products.filter((p) => p._id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Product deleted successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Unable to delete product",
      });
    }
  };

  /* START EDIT */
  const startEdit = (product) => {
    setEditingId(product._id);
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
  };

  /* UPDATE PRODUCT */
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/admin/services/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            price: Number(price),
          }),
        }
      );

      if (!res.ok) throw new Error();

      setProducts(
        products.map((p) =>
          p._id === id
            ? { ...p, title, description, price }
            : p
        )
      );

      setEditingId(null);

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Product updated successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Unable to update product",
      });
    }
  };

  /* LOADING */
  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-20">
        Loading dashboard...
      </p>
    );
  }

  /* UI */
  return (
    <motion.section
      className="min-h-screen pt-10 pb-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center text-pink-600 mb-14"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Admin Dashboard
      </motion.h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p, index) => (
          <motion.div
            key={p._id}
            className="bg-white/70 backdrop-blur-xl border border-pink-100 rounded-3xl shadow-xl overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              {editingId === p._id ? (
                <>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(p._id)}
                      className="flex-1 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 py-2 rounded-full border"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="text-gray-600 line-clamp-2">
                    {p.description}
                  </p>
                  <p className="font-bold text-pink-600">
                    ₦{Number(p.price).toLocaleString()}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(p)}
                      className="flex-1 py-2 rounded-full border text-pink-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="flex-1 py-2 rounded-full border text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
