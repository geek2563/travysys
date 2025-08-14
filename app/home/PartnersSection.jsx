"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

export default function PartnersShowcase() {
  const partners = [
    {
      name: "Travel World",
      logo: "/images/news_1.png",
      headline:
        "Travysys launches free visa travel campaign for Dubai, Abu Dhabi and Bali.",
      summary:
        "Travel-tech startup Travysys has launched a Free-Visa Holidays campaign, allowing Indian travellers to visit Dubai, Abu Dhabi and Bali without the need for visa fees or paperwork.",
      date: "Jun 11, 2025",
    },
    {
      name: "Business News",
      logo: "/images/news_2.png",
      headline: "Business Travel in 2025: Adapting to Tech and Trends",
      summary:
        "Corporate travel is evolving with sustainability goals and tech-first itineraries. Experts forecast a surge in remote work retreats and hybrid meetings worldwide.",
      date: "Jun 10, 2025",
    },
    {
      name: "News18",
      logo: "/images/news_3.png",
      headline: "Top 10 Destinations to Watch in 2025",
      summary:
        "Experts reveal the most sought-after destinations of 2025. Sustainability, cultural immersion, and digital detox trends are driving the travel industry forward.",
      date: "Jun 9, 2025",
    },
    {
      name: "afaqs!",
      logo: "/images/news_4.png",
      headline: "How Travel Media is Transforming Globally",
      summary:
        "Media houses are embracing AI and immersive experiences to connect with the next generation of travelers.",
      date: "Jun 8, 2025",
    },
    {
      name: "News18 Hindi",
      logo: "/images/news_5.png",
      headline: "Tech in Travel: The Big Shift",
      summary:
        "India’s top travel startups are adopting AI, automation, and sustainable infrastructure to redefine modern exploration.",
      date: "Jun 7, 2025",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [underlinePos, setUnderlinePos] = useState({ left: 0, width: 0 });
  const logoRefs = useRef([]);

  useEffect(() => {
    if (logoRefs.current[selectedIndex]) {
      const el = logoRefs.current[selectedIndex];
      setUnderlinePos({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [selectedIndex]);

  const nextPartner = () => {
    setSelectedIndex((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setSelectedIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const selected = partners[selectedIndex];

  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Recognised, celebrated & trusted by
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-xl text-gray-800 mb-10"
        >
          prestigious global media outlets
        </motion.p>

        {/* Desktop view - logos with moving underline */}
        <div className="hidden md:flex justify-center items-end gap-10 mb-6 relative">
          {/* Gray baseline */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200"></div>

          {partners.map((partner, idx) => (
            <button
              key={idx}
              ref={(el) => (logoRefs.current[idx] = el)}
              onClick={() => setSelectedIndex(idx)}
              className="relative pb-2 flex-shrink-0 mb-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className={`object-contain transition-opacity duration-200 ${
                  idx === selectedIndex
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            </button>
          ))}

          {/* Moving orange underline */}
          <motion.div
            className="absolute bottom-0 h-[2px] bg-[#f26727]"
            animate={underlinePos}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden items-center justify-center gap-6 mb-6">
          <button
            onClick={prevPartner}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={selected.logo}
              alt={selected.name}
              width={120}
              height={40}
              className="object-contain mx-auto mb-2"
            />
          </motion.div>

          <button
            onClick={nextPartner}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {selected.headline}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {selected.summary}
              </p>
              <p className="text-sm text-[#f26727] font-medium underline cursor-pointer mb-2 hover:opacity-80">
                Read More
              </p>
              <p className="text-sm text-gray-400">{selected.date}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-[#f26727] text-[#f26727] rounded-full hover:bg-[#f26727] hover:text-white transition-all"
          >
            View all <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
