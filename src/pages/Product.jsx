import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "../components/AddProduct";

export default function Products() {
  const initialProducts = [
    {
      id: 1,
      title: "Glueless HD Lace Wig",
      desc: "Breathable, beginner-friendly, natural hairline.",
      img: "/Glueless HD Lace Wig.jpeg",
      price: "₦120,000",
    },
    {
      id: 2,
      title: "Virgin European Hair",
      desc: "Soft, silky, high-end premium quality.",
      img: "/Virgin European Hair.jpeg",
      price: "₦180,000",
    },
    {
      id: 3,
      title: "Vietnamese Double Drawn",
      desc: "Thick, durable strands with natural shine.",
      img: "/Vietnamese Double Drawn.jpeg",
      price: "₦95,000",
    },
    {
      id: 4,
      title: "Raw Indian Curly Unit",
      desc: "Full, bouncy curls, long-lasting texture.",
      img: "/Raw Indian Curly Unit.jpeg",
      price: "₦150,000",
    },
    {
  id: "5",
  title: "Brazilian Body Wave Wig",
  desc: "Soft, voluminous waves for a glamorous look.",
  price: "₦140,000",
  img: "/Brazilian Body Wave Wig.jpeg",
},
{
  id: "6",
  title: "Peruvian Straight Wig",
  desc: "Silky, smooth texture with excellent density.",
  price: "₦130,000",
  img: "/Peruvian Straight Wig.jpeg",
},
{
  id: "7",
  title: "Malaysian Deep Wave Wig",
  desc: "Deep, defined waves with full-bodied volume.",
 price: "₦145,000",
  img: "/Malaysian Deep Wave Wig.jpeg",
},
{
  id: "8",
  title: "Indian Loose Curl Wig",
  desc: "Bouncy, soft curls with natural shine.",
 price: "₦135,000",
  img: "/Indian Loose Curl Wig.jpeg",
},
{
  id: "9",
  title: "European Straight Bob Wig",
  desc: "Chic bob cut with smooth silky texture.",
  price: "₦160,000",
  img: "/European Straight Bob Wig.jpeg",
},
{
  id: "10",
  title: "Vietnamese Curly Wig",
  desc: "Tight, defined curls with long-lasting bounce.",
  price: "₦155,000",
  img: "/Vietnamese Curly Wig.jpeg",
},
{
  id: "11",
  title: "Brazilian Straight Lace Front Wig",
  desc: "Natural hairline with silky straight hair.",
  price: "₦170,000",
  img: "/Brazilian Straight Lace Front Wig.jpeg",
},
{
  id: "12",
  title: "Peruvian Natural Wave Wig",
  desc: "Soft waves with natural movement and volume.",
 price: "₦150,000",
  img: "/Peruvian Natural Wave Wig.jpeg",
},
{
  id: "13",
  title: "Malaysian Straight Lace Wig",
  desc: "Straight, silky texture with natural hairline.",
 price: "₦165,000",
  img: "/Malaysian Straight Lace Wig.jpeg",
},
{
  id: "14",
  title: "Indian Kinky Curly Wig",
  desc: "Tightly coiled curls with natural volume.",
 price: "₦145,000",
  img: "/Indian Kinky Curly Wig.jpeg",
},

{
  id: "15",
  title: "Full Lace Knotless Braid Wig",
  desc: "Lightweight, natural-looking knotless braids.",
  price: "₦130,000",
  img: "/Full Lace Knotless Braid Wig.jpeg",
},

{
  id: "16",
  title: "Ghana Weaving Cornrow Wig",
  desc: "Classic Ghana braids with deep, clean cornrows.",
  price: "₦110,000",
  img: "/Ghana Weaving Cornrow Wig.jpeg",
},

{
  id: "17",
  title: "Box Braid Wig (Mid-Back Length)",
  desc: "Neatly crafted box braids for everyday wear.",
   price: "₦95,000",
  img: "/Box Braid Wig Mid Back.jpeg",
},

{
  id: "18",
  title: "Bohemian Braided Wig",
  desc: "Boho curls blended with knotless braids.",
  price: "₦140,000",
  img: "/Bohemian Braided Wig.jpeg",
},

{
  id: "19",
  title: "Tribal Fulani Braided Wig",
  desc: "Fulani-style braids with beads and accessories.",
  price: "₦125,000",
  img: "/Fulani Braided Wig.jpeg",
},

{
  id: "20",
  title: "Straight Back Ghana-Weaving Wig",
  desc: "Neat straight-back cornrows for a classy look.",
  price: "₦90,000",
  img: "/Straight Back Ghana Weaving Wig.jpeg",
},

{
  id: "21",
  title: "Passion Twist Braided Wig",
  desc: "Soft, springy passion twists for a natural look.",
  price: "₦100,000",
  img: "/Passion Twist Braided Wig.jpeg",
},

{
  id: "22",
  title: "Curly Ends Braid Wig",
  desc: "Knotless braids with luxurious curly ends.",
  price: "₦115,000",
  img: "/Curly Ends Braid Wig.jpg",
},

{
  id: "23",
  title: "Million Braids Wig",
  desc: "Extremely tiny, detailed braids for a rich look.",
  price: "₦200,000",
  img: "/Million Braids Wig.jpeg",
},
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section className="bg-dark text-pink-500 py-24 px-6 md:px-32 relative overflow-hidden">
  
      <div className="absolute inset-0 h-96 bg-gradient-to-b from-accent/10 via-dark to-dark -z-10"></div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-accent">
          Our Products
        </h1>
        <p className="mt-4 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Discover our premium luxury hair collection — crafted for elegance,
          confidence, and long-lasting beauty.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-accent transition duration-300 group"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover rounded-xl transform group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="mt-4 text-xl font-bold text-accent">{p.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
            <p className="text-lg font-extrabold text-primary mt-3">
              {p.price}
            </p>

            <Link
              to={`/product/${p.id}`}
              className="mt-5 inline-block w-full text-center px-6 py-2 bg-accent text-dark font-bold rounded-full hover:bg-primary transition transform hover:scale-105"
            >
              View
            </Link>
          </div>
        ))}
      </div>
      {/* Add Product Button
      <div className="max-w-6xl mx-auto mt-12">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-6 py-3 bg-pink-300 text-dark font-bold rounded-full hover:bg-primary transition"
        >
          {showAddForm ? "Close Form" : "Add New Product"}
        </button>
      </div>

      {/* Add Product Form (conditionally rendered) */}
      {showAddForm && <AddProduct setProducts={setProducts} />} */}
    </section>
  );
}
