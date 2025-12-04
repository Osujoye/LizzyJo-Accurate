import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import WhyUs from "./pages/WhyUs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/why" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
