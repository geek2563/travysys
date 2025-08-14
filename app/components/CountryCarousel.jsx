"use client";
import { useRef } from "react";
import {
  FaGlobeEurope,
  FaUmbrellaBeach,
  FaCity,
  FaFlagUsa,
  FaFlag,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiPalmTree, GiMountainClimbing } from "react-icons/gi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CountryCarousel() {
  const countries = [
    { name: "Europe", Icon: FaGlobeEurope },
    { name: "Maldives", Icon: FaUmbrellaBeach, trending: true },
    { name: "Ladakh", Icon: GiMountainClimbing, trending: true },
    { name: "Singapore", Icon: FaCity },
    { name: "USA", Icon: FaFlagUsa },
    { name: "Thailand", Icon: GiPalmTree },
    { name: "Bali", Icon: FaUmbrellaBeach, trending: true },
    { name: "North East India", Icon: FaMapMarkerAlt },
    { name: "Dubai", Icon: FaCity },
    { name: "Vietnam", Icon: FaFlag },
    { name: "Japan", Icon: FaFlag, trending: true },
    { name: "Australia", Icon: FaMapMarkerAlt },
    { name: "New Zealand", Icon: FaMapMarkerAlt },
    { name: "Canada", Icon: FaFlag },
    { name: "Brazil", Icon: FaFlag },
    { name: "South Africa", Icon: FaFlag },
    { name: "Italy", Icon: FaFlag },
    { name: "France", Icon: FaFlag },
    { name: "Mexico", Icon: FaFlag },
    { name: "Indonesia", Icon: FaFlag },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 100;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-10 relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll Left"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <FiChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex items-center space-x-6 overflow-x-auto pb-2 scrollbar-hide scroll-smooth px-12"
      >
        {countries.map(({ name, Icon, trending }, index) => {
          const isActive = name === "Europe";

          return (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px] py-5"
            >
              <div
                className={`relative w-12 h-12 mb-1 flex items-center justify-center text-2xl ${
                  isActive ? "text-orange-500" : "text-gray-600"
                }`}
              >
                <Icon />
                {trending && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded shadow font-semibold">
                    Trending
                  </span>
                )}
              </div>
              <span
                className={`text-sm text-gray-700 text-center whitespace-nowrap ${
                  isActive
                    ? "border-b-2 border-orange-500 pb-0.5 font-medium text-orange-500"
                    : ""
                }`}
              >
                {name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll Right"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <FiChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
