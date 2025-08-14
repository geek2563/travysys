"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaRobot, FaMotorcycle, FaBlog, FaUser, FaGlobe } from "react-icons/fa";
import { submenuItems } from "./constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
      <div className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <Image
            src={scrolled ? "/images/logo1.png" : "/images/logo.png"}
            alt="Logo"
            width={120}
            height={50}
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-1 justify-end gap-8">
          {/* Main Nav Links */}
          <div className="hidden md:flex space-x-6 font-medium text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 group transition duration-300"
              >
                <span
                  className={`text-base group-hover:text-[#FF6B6B] ${
                    scrolled ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  {link.icon}
                </span>
                <span
                  className={`group-hover:text-[#FF6B6B] ${
                    scrolled ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
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

      {/* Mobile Menu - Modern Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-gradient-to-b from-[#1e1e1e] to-[#111] text-white flex flex-col z-40"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <HiX
                className="w-8 h-8 cursor-pointer hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Main Links */}
            <div className="flex-1 overflow-y-auto px-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-xl font-semibold hover:text-[#FF6B6B] transition"
                >
                  <span className="text-2xl">{link.icon}</span>
                  {link.label}
                </Link>
              ))}

              {/* Submenu */}
              <div className="mt-8 border-t border-white/10 pt-6 space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-gray-400">
                  More Options
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {submenuItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm hover:text-[#28b28e] transition cursor-pointer"
                    >
                      <div className="text-lg">{item.icon}</div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 text-xs text-gray-500 border-t border-white/10">
              © {new Date().getFullYear()} TravelX. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
