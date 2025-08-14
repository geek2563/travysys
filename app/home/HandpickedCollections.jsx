"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HandpickedCollections() {
  const scrollRef = useRef(null);

  const collections = [
    {
      title: "Stays in & Around Delhi for a Weekend Getaway",
      tag: "TOP 8",
      image: "/images/travel_1.jpg",
    },
    {
      title: "Stays in & Around Mumbai for a Weekend Getaway",
      tag: "TOP 8",
      image: "/images/travel_1.jpg",
    },
    {
      title: "Stays in & Around Bangalore for a Weekend Getaway",
      tag: "TOP 9",
      image: "/images/travel_1.jpg",
    },
    {
      title: "Beach Destinations",
      tag: "TOP 11",
      image: "/images/travel_1.jpg",
    },
    { title: "Weekend Getaways", tag: "TOP 11", image: "/images/travel_1.jpg" },
    { title: "Hill Stations", tag: "TOP 11", image: "/images/travel_1.jpg" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Handpicked Collections for You</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {/* Local CSS for WebKit browsers */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {collections.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-48 rounded-lg overflow-hidden shadow-md"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              {/* Folder tab */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-200 rounded-t-lg shadow-sm"></div>

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={250}
                className="object-cover w-full h-60 rounded-lg"
              />

              {/* Tag */}
              <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                {item.tag}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
