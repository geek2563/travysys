"use client";
import { useState } from "react";
import { FaFire } from "react-icons/fa";

const locations = [
  {
    name: "Explore",
    icon: <FaFire className="text-orange-500" />,
    trending: false,
  },
  { name: "Europe", icon: "🗼", trending: false },
  { name: "Maldives", icon: "🏝️", trending: true },
  { name: "Ladakh", icon: "🏔️", trending: true },
  { name: "Singapore", icon: "🦁", trending: false },
  { name: "USA", icon: "🗽", trending: false },
  { name: "Thailand", icon: "🏯", trending: false },
  { name: "Bali", icon: "🌴", trending: true },
  { name: "North", icon: "🧭", trending: false },
];

export default function LocationSlider() {
  const [selected, setSelected] = useState("Explore");

  return (
    <div className="overflow-x-auto whitespace-nowrap border-b border-gray-300 px-4">
      <div className="inline-flex space-x-6 py-3">
        {locations.map((loc, index) => (
          <div
            key={index}
            onClick={() => setSelected(loc.name)}
            className={`relative cursor-pointer flex flex-col items-center text-sm font-medium ${
              selected === loc.name ? "text-[#043226]" : "text-gray-600"
            }`}
          >
            <div className="text-2xl">
              {typeof loc.icon === "string" ? loc.icon : loc.icon}
            </div>
            <span
              className={`mt-1 ${
                selected === loc.name ? "border-b-2 border-[#043226]" : ""
              }`}
            >
              {loc.name}
            </span>

            {loc.trending && (
              <div className="absolute top-[-8px] right-[-10px] text-[10px] bg-orange-500 text-white px-1 rounded-sm">
                Trending
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
