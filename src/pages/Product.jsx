import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/services`);

        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  },
);

  return (
    <section className="bg-dark text-pink-500 py-24 px-6 md:px-32">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-accent">Our Products</h1>
        <p className="mt-4 text-gray-500">
          Discover our premium luxury hair collection.
        </p>
      </div>

      {loading && <p className="text-center">Loading products...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-[#111] border border-white/10 rounded-2xl p-6"
            >
              <img
                src={p.image || "/placeholder.jpg"}
                alt={p.title}
                className="w-full h-64 object-cover rounded-xl"
              />

              <h3 className="mt-4 text-xl font-bold text-accent">
                {p.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-2">
                {p.description}
              </p>

              <p className="text-lg font-extrabold mt-3">
                ₦{Number(p.price).toLocaleString()}
              </p>

              <Link
                to={`/product/${p._id}`}
                className="block mt-4 text-center py-2 bg-accent text-dark rounded-full font-bold"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
