"use client";
import { useState, useRef, useEffect } from "react";
import OfferCard from "../components/OfferCard";
import SpecialServiceCard from "../components/SpecialServiceCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import topOffers from "../data/topOffers";
import bottomOffers from "../data/bottomOffers";

export default function OfferSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Offers");
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categories = [
    "All Offers",
    "Bank Offers",
    "Flights",
    "Hotels",
    "Holidays",
    "Cabs",
    "Bus",
    "Trains",
    "Forex",
  ];

  const filteredOffers =
    selectedCategory === "All Offers"
      ? topOffers
      : topOffers.filter((offer) => offer.category === selectedCategory);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, [filteredOffers]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white p-6 md:p-10 rounded-xl shadow-inner max-w-7xl mx-auto my-10 space-y-14">
      {/* Top Section */}
      <div>
        {/* Header with buttons */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🔥 Offers</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                canScrollLeft
                  ? "bg-white hover:bg-gray-100 text-gray-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                canScrollRight
                  ? "bg-white hover:bg-gray-100 text-gray-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {filteredOffers.map((offer, idx) => (
            <div key={idx} className="flex-shrink-0 w-72">
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            ✨ Special Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomOffers.map((service, idx) => (
            <SpecialServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
