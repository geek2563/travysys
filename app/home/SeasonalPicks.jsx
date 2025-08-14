"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SeasonalPicks() {
  const scrollRef = useRef(null);

  const picks = [
    {
      title: "Summer Escapes",
      subtitle: "Cool beaches & tropical vibes",
      img: "/images/travel_1.jpg",
    },
    {
      title: "Winter Wonderlands",
      subtitle: "Snowy peaks & cozy cabins",
      img: "/images/travel_1.jpg",
    },
    {
      title: "Spring Blossoms",
      subtitle: "Flower fields & fresh trails",
      img: "/images/travel_1.jpg",
    },
    {
      title: "Autumn Trails",
      subtitle: "Golden leaves & scenic hikes",
      img: "/images/travel_1.jpg",
    },
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
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Seasonal Picks</h2>
          {/* Scroll Buttons */}
          <div className="lg:hidden flex gap-2">
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

        {/* Scrollable on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {/* Hide scrollbar in Webkit */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {picks.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[250px] lg:min-w-0 rounded-lg overflow-hidden shadow-md group snap-start"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
              {/* Text */}
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
