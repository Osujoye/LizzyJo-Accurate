import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting LizzyJo Accurate! 💖");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="min-h-screen pt-10 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center text-pink-600 mb-14 drop-shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {/* LEFT SIDE */}
        <motion.div
          className="space-y-7 text-gray-700"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p className="text-lg leading-relaxed">
            We’d love to hear from you! Whether it's a question, suggestion,
            custom order, or you simply want to connect — our team is always
            happy to help 💛.
          </p>

          <motion.div
            className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl shadow-md backdrop-blur"
            whileHover={{ scale: 1.02 }}
          >
            <Mail className="text-pink-500 w-6 h-6" />
            <span className="font-medium">accuratemyworld@gmail.com</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl shadow-md backdrop-blur"
            whileHover={{ scale: 1.02 }}
          >
            <Phone className="text-pink-500 w-6 h-6" />
            <span className="font-medium">+234 906 652 2337</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl shadow-md backdrop-blur"
            whileHover={{ scale: 1.02 }}
          >
            <MapPin className="text-pink-500 w-6 h-6" />
            <span className="font-medium">Ogijo, Lagos, Nigeria</span>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-xl p-8 space-y-6 border border-orange-100"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div>
            <label className="block mb-2 text-gray-600 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border rounded-xl focus:outline-pink-400 focus:ring-2 focus:ring-orange-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-xl focus:outline-pink-400 focus:ring-2 focus:ring-orange-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-pink-400 focus:ring-2 focus:ring-orange-200"
              required
            ></textarea>
          </div>

          <motion.a
            href="https://wa.me/2349028963407?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition flex items-center justify-center"
          >
            Send Message
          </motion.a>
        </motion.form>
      </div>
    </motion.section>
  );
}
