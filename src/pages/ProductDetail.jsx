import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/services/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Unable to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* Loading */
  if (loading) {
    return (
      <section className="bg-dark min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Loading product...</p>
      </section>
    );
  }

  /* Error */
  if (error || !product) {
    return (
      <section className="bg-dark min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">
          {error || "Product not found"}
        </p>
        <Link to="/products" className="text-accent underline">
          Back to products
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-dark min-h-screen py-24 px-6 md:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-extrabold text-primary">
            ₦{Number(product.price).toLocaleString()}
          </p>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <a
              href={`https://wa.me/2349028963407?text=Hello,%20I%20want%20to%20book%20${product.title}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-accent text-dark font-bold hover:bg-primary transition"
            >
              Book Now
            </a>

            <Link
              to="/products"
              className="px-8 py-3 rounded-full border border-accent text-accent font-bold hover:bg-accent hover:text-dark transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
