"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaChevronDown,
  FaRobot,
  FaMotorcycle,
  FaBlog,
  FaUser,
  FaGlobe,
} from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { submenuItems } from "./constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Plan Trip AI", href: "/plan-trip-ai", icon: <FaRobot /> },
    { label: "Find Flight AI", href: "/find-flight-ai", icon: <FaRobot /> },
    { label: "Book Flight", href: "/book-flight", icon: <MdFlightTakeoff /> },
    { label: "Bike Rides", href: "/bike-rides", icon: <FaMotorcycle /> },
    { label: "Blogs", href: "/blogs", icon: <FaBlog /> },
    { label: "Login", href: "/login", icon: <FaUser /> },
    { label: "Currency", href: "/currency-language", icon: <FaGlobe /> },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "text-white"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 flex-shrink-0">
          <Image
            src={scrolled ? "/images/logo1.png" : "/images/logo.png"}
            alt="Logo"
            width={120}
            height={50}
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Center: Submenu */}
        {scrolled && (
          <div className="hidden md:flex items-center gap-6 flex-grow justify-center flex-wrap">
            {submenuItems.slice(0, 9).map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-xs text-gray-700 hover:text-[#28b28e] transition cursor-pointer"
                title={item.label}
              >
                <div className="text-lg">{item.icon}</div>
                <span className="whitespace-nowrap">
                  {item.label.length > 7
                    ? `${item.label.slice(0, 7)}...`
                    : item.label}
                </span>
              </div>
            ))}
            <div className="relative group">
              <div className="flex flex-col items-center text-xs text-gray-700 hover:text-[#28b28e] cursor-pointer">
                <FaChevronDown className="text-lg" />
                <span>More</span>
              </div>
              <div className="absolute top-10 left-0 bg-white border shadow-lg p-3 rounded-md hidden group-hover:block z-50 min-w-[140px]">
                {submenuItems.slice(9).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 py-1 px-2 w-full hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
                  >
                    <div className="text-lg">{item.icon}</div>
                    <span>
                      {item.label.length > 7
                        ? `${item.label.slice(0, 7)}...`
                        : item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right: Main Nav */}
        <div className="hidden md:flex items-center gap-6 font-medium text-sm flex-shrink-0">
          {navLinks
            .filter(
              (link) =>
                !scrolled ||
                (link.label !== "Blogs" && link.label !== "Bike Rides")
            )
            .map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-1 group transition duration-300"
              >
                <span
                  className={`text-base group-hover:text-[#FF6B6B] flex items-center justify-center ${
                    scrolled ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  {link.icon}
                </span>
                <span
                  className={`text-xs group-hover:text-[#FF6B6B] ${
                    scrolled ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <HiX
                className={`w-8 h-8 ${scrolled ? "text-black" : "text-white"}`}
              />
            ) : (
              <HiMenu
                className={`w-8 h-8 ${scrolled ? "text-black" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden px-6 py-4 space-y-4 font-medium text-lg ${
              scrolled ? "bg-white text-black" : "text-white"
            } backdrop-blur-xl`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 border-b border-white/10 pb-2 hover:text-[#FF6B6B] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg flex items-center justify-center w-6">
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              {submenuItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2 px-3 w-full hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
                >
                  <div className="text-lg flex items-center justify-center w-6">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
