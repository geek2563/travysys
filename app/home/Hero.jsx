"use client";

import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { submenuItems } from "../components/constants";
import SearchBar from "../components/SearchBar";

export default function Hero() {
  const [showFloatingMenu, setShowFloatingMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Hide menu if user scrolls even slightly down
      if (window.scrollY > 0) {
        setShowFloatingMenu(false);
      } else {
        setShowFloatingMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white box-border">
      {/* Background Image */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero_img.jpeg')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5 }}
      ></motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

      {/* Floating Menu */}
      {showFloatingMenu && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute z-30 px-4 sm:px-6 w-full top-30"
        >
          <div className="mx-auto w-full max-w-7xl bg-white py-6 px-4 sm:px-6 rounded-2xl shadow-lg border border-gray-200 box-border text-black">
            <div className="flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto no-scrollbar">
              {submenuItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center text-xs sm:text-sm cursor-pointer group flex-shrink-0 min-w-[72px]"
                >
                  <div className="text-xl sm:text-2xl mb-1 text-gray-700 group-hover:text-[#28b28e]">
                    {item.icon}
                  </div>
                  <span className="group-hover:text-[#28b28e] text-gray-800">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center max-w-3xl mx-auto mt-10">
        <motion.div
          className="mt-8 mb-6 flex gap-2 sm:gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg border border-white/20">
            <FaMapMarkerAlt className="text-[#28b28e]" />
            100+ Places
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg border border-white/20">
            <FaStar className="text-[#28b28e]" />
            Trusted by 10K+ Travellers
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Discover Your{" "}
          <span className="bg-gradient-to-r from-[#28b28e] to-[#6ee7b7] bg-clip-text text-transparent">
            Dream Destination
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 px-2 sm:px-0"
        >
          Explore hidden gems, iconic landmarks, and unforgettable travel
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full sm:w-max px-4 sm:px-0"
        >
          <SearchBar />
        </motion.div>
      </div>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
