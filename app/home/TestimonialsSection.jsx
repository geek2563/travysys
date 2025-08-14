"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "/images/testimonial_1.png",
    name: "Rishiraj Ramaswamy",
    role: "Local Guide",
    company: "",
    quote:
      "I visited Hornbill, Nagaland with assistance from Travysys and it was a mind boggling trip, an adventure of a lifetime. The rich heritage of Khonoma and the assistance from Team Travysys was really amazing. Simply outstanding efforts by team Travysys.",
    rating: 5,
  },
  {
    image: "/images/person_2.jpg",
    name: "James Lee",
    role: "Frequent Traveler",
    company: "Global Nomads",
    quote:
      "Incredible! I’ve discovered places I never would’ve considered. The personalized recommendations are spot on.",
    rating: 4,
  },
  {
    image: "/images/person_3.jpg",
    name: "Rubica Singh",
    role: "Local Guide",
    company: "",
    quote:
      "The best travel company in North East India! Our tour package was an affordable and beautifully curated package with wonderful hotels and seamless transfers. Special thanks to Mr. Priyangshu who is an expert in this field. Will definitely book again for our next adventure, now that they have South East Asian countries (International) trips as well.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="relative flex flex-col items-center px-4 py-20 bg-gradient-to-br from-[#f8f9ff] via-[#f0f1ff] to-[#e8f0ff]">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">
        What Our Travelers Say
      </h2>
      <p className="text-gray-500 mt-3 text-center text-lg">
        Real stories from{" "}
        <span className="text-purple-600 font-medium">mindful journeys</span>
      </p>

      {/* Card Container */}
      <div className="relative mt-20 mx-auto max-w-3xl overflow-visible">
        <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl px-8 py-14 md:py-16 text-center relative">
          {/* Avatar - Half Outside Card */}
          <div className="absolute left-1/2 -top-14 transform -translate-x-1/2">
            <div className="relative w-28 h-28 rounded-full ring-4 ring-purple-300 border-4 border-white shadow-xl overflow-hidden">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 text-yellow-400 text-xl mt-2">
            {Array(testimonials[current].rating)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl italic mt-6 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            “{testimonials[current].quote}”
          </blockquote>

          {/* Info */}
          <div className="mt-8">
            <h3 className="font-bold text-gray-900 text-lg">
              {testimonials[current].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[current].role}
            </p>
            <p className="text-xs text-purple-500 font-semibold mt-1">
              {testimonials[current].company}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          aria-label="Previous"
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
        >
          <IoIosArrowBack className="text-2xl" />
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Next"
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
        >
          <IoIosArrowForward className="text-2xl" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="mt-10 flex gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-purple-500 scale-125 shadow-purple-400 shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
