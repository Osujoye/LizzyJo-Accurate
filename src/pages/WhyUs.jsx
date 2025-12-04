import React from "react";
import { CheckCircle, Sparkle, User, Video } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      text: "100% virgin hair — no chemical processing.",
    },
    {
      icon: <Sparkle className="w-6 h-6 text-accent" />,
      text: "Beginner-friendly wigs with natural partings and hairlines.",
    },
    {
      icon: <User className="w-6 h-6 text-accent" />,
      text: "Independent brand focused on customer experience.",
    },
    {
      icon: <Video className="w-6 h-6 text-accent" />,
      text: "Video consultations and custom fittings available.",
    },
  ];

  return (
    <section className="bg-dark text-pink-300 py-24 px-6 md:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-accent">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          At <strong>LizzyJo Accurate Beauty Collection</strong>, every detail is
          designed for luxury, elegance, and effortless beauty. Discover why
          women trust us for their most stunning looks.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/10 transition transform hover:scale-105"
            >
              {feature.icon}
              <p className="text-gray-500 text-lg font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
