"use client";

import { useState } from "react";
import Image from "next/image";
import allianceImg from "public/images/image.png"; // adjust path as needed

const tabs = [
  { name: "Europe", value: "europe" },
  { name: "Maldives", value: "maldives" },
];

const tours = {
  europe: [
    { title: "Europe Tour 1", desc: "Description for Europe Tour 1" },
    { title: "Europe Tour 2", desc: "Description for Europe Tour 2" },
  ],
  maldives: [
    { title: "Maldives Tour 1", desc: "Description for Maldives Tour 1" },
    { title: "Maldives Tour 2", desc: "Description for Maldives Tour 2" },
  ],
};

export default function ToursActivitiesSection() {
  const [selected, setSelected] = useState("europe");

  return (
    <>
      <section className="py-12 px-4 bg-[#EEF0F3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#043226] text-center mb-8">
            Tours & Activities
          </h2>

          {/* Tab Switcher */}
          <div className="flex justify-center space-x-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                  selected === tab.value
                    ? "bg-[#043226] text-white border-[#043226]"
                    : "bg-transparent text-[#043226] border-[#043226] hover:bg-[#043226] hover:text-white"
                }`}
                onClick={() => setSelected(tab.value)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {tours[selected].map((tour, index) => (
              <div
                key={index}
                className="bg-[#E7F2FD] p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-[#043226] mb-2">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-700">{tour.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Board Alliances Section */}
      <div className="py-8 px-4 text-center">
        <h2 className="text-2xl font-semibold text-[#071E22] mb-6">
          Tourism Board Alliances
        </h2>

        <div className="flex justify-center">
          <Image
            src="/images/image.png"
            alt="Alliance"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
