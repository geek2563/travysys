"use client";
import { useState } from "react";

export default function TabsSwitcher() {
  const [active, setActive] = useState("Tours");

  return (
    <div className="flex flex-col items-center my-6">
      {/* Tabs */}
      <div className="flex">
        <button
          className={`px-6 py-2 border font-medium rounded-l-full transition duration-200 ${
            active === "Tours"
              ? "bg-[#043226] text-white"
              : "bg-[#E7F2FD] text-[#043226]"
          }`}
          onClick={() => setActive("Tours")}
        >
          Tours
        </button>
        <button
          className={`px-6 py-2 border font-medium rounded-r-full transition duration-200 ${
            active === "Activities"
              ? "bg-[#043226] text-white"
              : "bg-[#E7F2FD] text-[#043226]"
          }`}
          onClick={() => setActive("Activities")}
        >
          Activities
        </button>
      </div>

      {/* Dynamic Content Area (Optional) */}
      <div className="mt-6 w-full text-center">
        {active === "Tours" ? (
          <div className="text-[#043226] text-lg">
            Tours content goes here...
          </div>
        ) : (
          <div className="text-[#043226] text-lg">
            Activities content goes here...
          </div>
        )}
      </div>
    </div>
  );
}
