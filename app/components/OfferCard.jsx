"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function OfferCard({ offer }) {
  return (
    <div className="relative rounded-[20px] overflow-hidden shadow-lg group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl w-full h-80 cursor-pointer">
      {/* Background Image */}
      <Image
        src="/images/travel_1.jpg"
        alt={offer.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Title & Description */}
        <h3 className="text-white text-xl font-semibold">{offer.title}</h3>
        <p className="text-white/90 text-sm mt-1 leading-snug">
          {offer.subtitle}
        </p>

        {/* Ratings & Stay Info */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
            <span>4.5</span>
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-gray-400 text-sm" />
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
            3 Night Stay
          </div>
        </div>

        {/* CTA Button */}
        {offer.button && (
          <button className="mt-4 w-full bg-white text-gray-900 font-semibold text-sm py-2 rounded-full shadow hover:bg-gray-100 transition">
            {offer.button}
          </button>
        )}
      </div>
    </div>
  );
}
