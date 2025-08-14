"use client";

import { useState } from "react";

export default function FlightSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  return (
    <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl px-4 py-2 border border-white/20 shadow-xl">
      {/* Scrollable wrapper */}
      <div className="flex items-center gap-4 text-gray-700 overflow-x-auto scrollbar-hide">
        {/* From */}
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 rounded-l-3xl focus:outline-none w-full sm:w-40 md:w-48 lg:w-40"
        />
        {/* To */}
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none w-full sm:w-40 md:w-48 lg:w-40"
        />
        {/* Departure */}
        <input
          type="date"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none w-full sm:w-40 md:w-48 lg:w-40"
        />
        {/* Return */}
        <input
          type="date"
          placeholder="Return"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none w-full sm:w-40 md:w-48 lg:w-40"
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
          className="bg-transparent text-white placeholder-gray-300 border-r border-white/20 px-3 py-2 focus:outline-none w-full sm:w-48 md:w-56 lg:w-48"
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
        <button className="bg-[#f97316] px-6 py-2 rounded-r-3xl text-white font-semibold hover:brightness-90 transition w-full sm:w-auto">
          Search
        </button>
      </div>
    </div>
  );
}
