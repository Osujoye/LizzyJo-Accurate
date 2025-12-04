import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    {
      id: "1",
      title: "Glueless HD Lace Wig",
      desc: "Breathable, beginner-friendly, natural hairline with ultra-thin lace.",
      details:
        "This HD lace wig is designed for every queen who desires a natural, flawless look. Soft, durable, lightweight, and blends perfectly with any skin tone.",
      price: "₦120,000",
      img: "/Glueless HD Lace Wig.jpeg",
    },
    {
      id: "2",
      title: "Virgin European Hair",
      desc: "Silky smooth, luxurious texture with long-lasting shine.",
      details:
        "Premium European hair known for its softness and durability. Perfect for long-term use and can be styled with heat tools effortlessly.",
      price: "₦180,000",
      img: "/Virgin European Hair.jpeg",
    },
    {
      id: "3",
      title: "Vietnamese Double Drawn",
      desc: "Full from root to tip with beautiful density.",
      details:
        "This wig offers unmatched fullness and strength. Double drawn strands guarantee volume while maintaining natural comfort.",
      price: "₦95,000",
      img: "/Vietnamese Double Drawn.jpeg",
    },
    {
      id: "4",
      title: "Raw Indian Curly Unit",
      desc: "Luxurious bouncy curls with natural movement.",
      details:
        "The curls remain intact even after washing. Perfect for clients who love rich texture and body.",
      price: "₦150,000",
      img: "/Raw Indian Curly Unit.jpeg",
    },
    {
  id: "5",
  title: "Brazilian Body Wave Wig",
  desc: "Soft, voluminous waves for a glamorous look.",
  details:
    "Premium Brazilian hair with natural shine and movement. Perfect for daily wear or special events.",
  price: "₦140,000",
  img: "/Brazilian Body Wave Wig.jpeg",
},
{
  id: "6",
  title: "Peruvian Straight Wig",
  desc: "Silky, smooth texture with excellent density.",
  details:
    "Long-lasting Peruvian hair that can be styled and straightened easily. Lightweight and comfortable.",
  price: "₦130,000",
  img: "/Peruvian Straight Wig.jpeg",
},
{
  id: "7",
  title: "Malaysian Deep Wave Wig",
  desc: "Deep, defined waves with full-bodied volume.",
  details:
    "Malaysian hair known for its durability and softness. Adds natural bounce and volume to your style.",
  price: "₦145,000",
  img: "/Malaysian Deep Wave Wig.jpeg",
},
{
  id: "8",
  title: "Indian Loose Curl Wig",
  desc: "Bouncy, soft curls with natural shine.",
  details:
    "High-quality Indian hair with loose curls. Easy to maintain and style for everyday wear.",
  price: "₦135,000",
  img: "/Indian Loose Curl Wig.jpeg",
},
{
  id: "9",
  title: "European Straight Bob Wig",
  desc: "Chic bob cut with smooth silky texture.",
  details:
    "European hair that is soft, shiny, and easy to manage. Perfect for professional and casual looks.",
  price: "₦160,000",
  img: "/European Straight Bob Wig.jpeg",
},
{
  id: "10",
  title: "Vietnamese Curly Wig",
  desc: "Tight, defined curls with long-lasting bounce.",
  details:
    "Double drawn Vietnamese hair that keeps curls intact. Perfect for a voluminous and lively look.",
  price: "₦155,000",
  img: "/Vietnamese Curly Wig.jpeg",
},
{
  id: "11",
  title: "Brazilian Straight Lace Front Wig",
  desc: "Natural hairline with silky straight hair.",
  details:
    "Lace front wig that blends seamlessly. Brazilian hair provides shine and softness for a premium look.",
  price: "₦170,000",
  img: "/Brazilian Straight Lace Front Wig.jpeg",
},
{
  id: "12",
  title: "Peruvian Natural Wave Wig",
  desc: "Soft waves with natural movement and volume.",
  details:
    "Peruvian hair with natural bounce and shine. Ideal for a low-maintenance, everyday glamorous look.",
  price: "₦150,000",
  img: "/Peruvian Natural Wave Wig.jpeg",
},
{
  id: "13",
  title: "Malaysian Straight Lace Wig",
  desc: "Straight, silky texture with natural hairline.",
  details:
    "Malaysian hair that is soft, smooth, and easy to style. Lace front ensures a seamless finish.",
  price: "₦165,000",
  img: "/Malaysian Straight Lace Wig.jpeg",
},
{
  id: "14",
  title: "Indian Kinky Curly Wig",
  desc: "Tightly coiled curls with natural volume.",
  details:
    "High-quality Indian hair with kinky curls. Perfect for an afro-textured look with body and bounce.",
  price: "₦145,000",
  img: "/Indian Kinky Curly Wig.jpeg",
},
{
  id: "15",
  title: "Full Lace Knotless Braid Wig",
  desc: "Lightweight, natural-looking knotless braids.",
  details:
    "Handmade full lace wig with neatly crafted knotless braids. Comfortable for long wear with a natural scalp illusion.",
  price: "₦130,000",
  img: "/Full Lace Knotless Braid Wig.jpeg",
},

{
  id: "16",
  title: "Ghana Weaving Cornrow Wig",
  desc: "Classic Ghana braids with deep, clean cornrows.",
  details:
    "Designed for durability and beauty. Perfect for protective styling with zero tension on your natural hair.",
  price: "₦110,000",
  img: "/Ghana Weaving Cornrow Wig.jpeg",
},

{
  id: "17",
  title: "Box Braid Wig (Mid-Back Length)",
  desc: "Neatly crafted box braids for everyday wear.",
  details:
    "Glueless braid wig with natural scalp effect. Lightweight and beginner-friendly.",
  price: "₦95,000",
  img: "/Box Braid Wig Mid Back.jpeg",
},

{
  id: "18",
  title: "Bohemian Braided Wig",
  desc: "Boho curls blended with knotless braids.",
  details:
    "Trendy bohemian curls that frame the face beautifully. Very soft, natural and stylish.",
  price: "₦140,000",
  img: "/Bohemian Braided Wig.jpeg",
},

{
  id: "19",
  title: "Tribal Fulani Braided Wig",
  desc: "Fulani-style braids with beads and accessories.",
  details:
    "Lightweight tribal braids with stylish parting and optional beads. Perfect for cultural and modern looks.",
  price: "₦125,000",
  img: "/Fulani Braided Wig.jpeg",
},

{
  id: "20",
  title: "Straight Back Ghana-Weaving Wig",
  desc: "Neat straight-back cornrows for a classy look.",
  details:
    "Perfect for work, travel, and everyday wear. Gives a neat, youthful appearance.",
  price: "₦90,000",
  img: "/Straight Back Ghana Weaving Wig.jpeg",
},

{
  id: "21",
  title: "Passion Twist Braided Wig",
  desc: "Soft, springy passion twists for a natural look.",
  details:
    "Beautiful handmade twists that mimic natural kinky texture. Lightweight and beginner-friendly.",
  price: "₦100,000",
  img: "/Passion Twist Braided Wig.jpeg",
},

{
  id: "22",
  title: "Curly Ends Braid Wig",
  desc: "Knotless braids with luxurious curly ends.",
  details:
    "A trendy mix of straight braids and bouncy curls. Great for those who love volume and length.",
  price: "₦115,000",
  img: "/Curly Ends Braid Wig.jpg",
},

{
  id: "23",
  title: "Million Braids Wig",
  desc: "Extremely tiny, detailed braids for a rich look.",
  details:
    "Takes days to handcraft. Lightweight and elegant, perfect for special occasions.",
  price: "₦200,000",
  img: "/Million Braids Wig.jpeg",
},
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-40 text-red-500 text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="bg-dark text-pink-500 min-h-screen py-24 px-6 md:px-32 relative overflow-hidden">
      <div className="absolute inset-0 h-96 bg-gradient-to-b from-accent/10 via-dark to-dark -z-10"></div>

      <div className="max-w-6xl mx-auto mb-10">
        <Link
          to="/products"
          className="text-accent font-semibold hover:text-primary transition text-lg"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-2xl hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-400 text-lg">{product.desc}</p>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            {product.details}
          </p>

          <p className="text-3xl font-extrabold text-primary mt-8">
            {product.price}
          </p>

          <div className="flex gap-4 mt-10">
          <a
  href={`https://wa.me/2349066522337?text=${encodeURIComponent(
    `Hello! I am interested in the product "${product.title}". 
Price: ${product.price}. 
Image: ${window.location.origin + product.img}

Please share more details:
• Availability
• Delivery options
• Payment methods

Thank you!`
  )}`}
  className="bg-accent text-dark px-8 py-3 rounded-full font-bold hover:bg-primary transition hover:scale-105"
>
  Order on WhatsApp
</a>

            <Link
        to="/wishlist">
            <button
              onClick={() => addToWishlist(product)}
              className="px-8 py-3 border border-pink-500 rounded-full font-bold text-pink-500 hover:bg-pink-500 hover:text-white transition"
            >
              Add to Wishlist
            </button>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
