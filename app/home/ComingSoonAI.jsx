"use client";

import { FaRoute, FaPlane, FaGavel, FaUsers } from "react-icons/fa";

export default function ComingSoonAI() {
  const features = [
    {
      title: "Plan Trip by AI",
      icon: <FaRoute className="text-white text-3xl" />,
      desc: "Let AI create perfect itineraries tailored to your preferences, budget, and travel style with intelligent recommendations.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Find a Flight by AI",
      icon: <FaPlane className="text-white text-3xl" />,
      desc: "Discover the best flight deals with AI-powered search that analyzes millions of options to find your perfect match.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Bid a Flight",
      icon: <FaGavel className="text-white text-3xl" />,
      desc: "Set your price and let our bidding system work to secure flights at your desired rate with real-time negotiations.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Group Booking",
      icon: <FaUsers className="text-white text-3xl" />,
      desc: "Coordinate and book travel for multiple people with intelligent group management and shared planning tools.",
      gradient: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section
      className="relative py-20 text-center px-6 overflow-hidden"
      style={{ backgroundColor: "#eef1ff" }}
    >
      <div className="relative max-w-5xl mx-auto">
        <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
          ✦ REVOLUTIONARY TRAVEL TECHNOLOGY
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-gray-900">AI Travel </span>
          <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 bg-clip-text text-transparent">
            Assistant
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          We're building a smart assistant to revolutionize the way you travel.
          From customized itineraries to real-time suggestions — let AI do the
          planning, so you can enjoy the journey.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition mb-6 flex items-center gap-2 mx-auto">
          🚀 Launching Soon
        </button>

        <p className="text-gray-500 text-sm md:text-base mb-12">
          Stay tuned for smarter, faster, and more personalized travel
          experiences — powered by AI.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${f.gradient} hover:scale-105 transition-transform`}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4 mx-auto">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/90 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <span className="w-6 h-6 bg-pink-400 rounded-full"></span>
            <span className="w-6 h-6 bg-blue-400 rounded-full"></span>
            <span className="w-6 h-6 bg-green-400 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-sm">
            Join 10,000+ travelers waiting for launch
          </p>
        </div>
      </div>
    </section>
  );
}
