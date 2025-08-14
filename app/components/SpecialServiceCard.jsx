"use client";
import Image from "next/image";

export default function SpecialServiceCard({ service }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Image */}
      <div className="relative w-full h-52">
        <Image
          src="/images/travel_1.jpg"
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Tag */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {service.tag}
        </span>
        {/* Menu dots (optional) */}
        <span className="absolute top-3 right-3 text-white text-lg font-bold">
          ⋮
        </span>
      </div>

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <h3 className="text-white text-lg font-bold">{service.title}</h3>
        <button className="text-white text-sm mt-1 flex items-center gap-1 group-hover:underline">
          View Trip →
        </button>
      </div>
    </div>
  );
}
