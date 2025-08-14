"use client";

import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FlightSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-white/10 backdrop-blur-lg rounded-3xl px-4 py-2 border border-white/20 shadow-xl">
      {/* Scroll Left Button - Mobile only */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition md:hidden z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable wrapper */}
      <div
        ref={scrollRef}
        className="flex items-center gap-4 text-gray-700 overflow-x-auto md:overflow-visible scrollbar-hide md:flex-wrap scroll-smooth"
      >
        {/* From */}
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 rounded-l-3xl focus:outline-none flex-shrink-0 w-44 md:w-48"
        />
        {/* To */}
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none flex-shrink-0 w-44 md:w-48"
        />
        {/* Departure */}
        <input
          type="date"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none flex-shrink-0 w-44 md:w-48"
        />
        {/* Return */}
        <input
          type="date"
          placeholder="Return"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none flex-shrink-0 w-44 md:w-48"
        />
        {/* Travellers & Class */}
        <select
          value={`${travellers} Traveller${
            travellers > 1 ? "s" : ""
          }, ${travelClass}`}
          onChange={(e) => {
            const [trav, cls] = e.target.value.split(", ");
            setTravellers(Number(trav));
            setTravelClass(cls);
          }}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none flex-shrink-0 w-56 md:w-56"
        >
          <option value="1 Traveller, Economy" className="text-white bg-black">
            1 Traveller, Economy
          </option>
          <option value="2 Travellers, Economy" className="text-white bg-black">
            2 Travellers, Economy
          </option>
          <option value="3 Travellers, Economy" className="text-white bg-black">
            3 Travellers, Economy
          </option>
          <option value="1 Traveller, Business" className="text-white bg-black">
            1 Traveller, Business
          </option>
          <option
            value="2 Travellers, Business"
            className="text-white bg-black"
          >
            2 Travellers, Business
          </option>
          <option value="1 Traveller, First" className="text-white bg-black">
            1 Traveller, First
          </option>
        </select>

        {/* Search Button */}
        <button className="bg-[#f97316] px-6 py-2 rounded-r-3xl text-white font-semibold hover:brightness-90 transition flex-shrink-0">
          Search
        </button>
      </div>

      {/* Scroll Right Button - Mobile only */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition md:hidden z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
