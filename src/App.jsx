import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import AdminLogin from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/admin/Dashboard";
import PublicLayout from "./layouts/PublicLayout";
import Upload from "./pages/admin/Upload";
import AdminGallery from "./pages/admin/AdminGallery";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/why" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<DashboardHome />} />
            <Route path="/admin/upload" element={<Upload />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <div className="text-center py-20">404 - Page Not Found</div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
