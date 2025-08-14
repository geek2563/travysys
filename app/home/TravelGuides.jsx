"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    date: "Jun 4, 2025",
    author: "Sneha Chamaria",
    title: "What is the Free Visa Offer?",
    desc: "What is this free Visa offer? Real or fake? Or another *?",
    image: "/images/travel_1.jpg",
  },
  {
    id: 2,
    date: "Jul 23, 2025",
    author: "Supriya Sahu",
    title:
      "No Travel Plans? Need Ideas? Travysys’s AI Trip Planner Has Your Back (and Bags)",
    desc: "Get inspired with Travysys’s AI Trip Planner. Effortless bookings, custom itineraries, and local gems—all in one.",
    image: "/images/travel_1.jpg",
  },
  {
    id: 3,
    date: "Jul 4, 2025",
    author: "Supriya Sahu",
    title:
      "Beyond The Grid: Travysys’s IG Live Series From Your Favourite Creators.",
    desc: "Travysys is launching an Instagram Live series called Beyond the Grid, where popular travel content creators...",
    image: "/images/travel_1.jpg",
  },
  {
    id: 4,
    date: "Jul 10, 2025",
    author: "Samridhi Puri",
    title: "F1 Movie Fan? Experience the “F1” Film’s Real World!",
    desc: "Go beyond the screen! Experience the real F1 magic at Yas Marina Circuit and Ferrari World. Your Abu Dhabi...",
    image: "/images/travel_1.jpg",
  },
];

export default function TravelGuidesSection() {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Travel guides and travel tips <br /> for your next travel inspiration
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-40 md:w-48 h-40 md:h-auto flex-shrink-0">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <FaUser className="inline-block mr-1 text-gray-400" />
                  <span>{blog.author}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-500 hover:text-white transition">
          All Blogs →
        </button>
      </div>
    </section>
  );
}
