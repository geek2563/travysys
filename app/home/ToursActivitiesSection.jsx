"use client";

import { useState } from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import CountryCarousel from "../components/CountryCarousel";

export default function ToursActivitiesSection() {
  const [activeTab, setActiveTab] = useState("tours");

  const formatPrice = (value) => value?.toLocaleString("en-IN");

  const europeTours = [
    {
      id: 1,
      title: "Best of Switzerland-6 days | Bernina Express | Scenic Alps",
      location: "Europe",
      duration: "6 days & 6 nights",
      rating: 4.5,
      reviews: 89,
      price: 143200,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      tags: ["Adventure", "Sightseeing", "Group", "Rail Travel"],
      badges: ["Rail Travel"],
    },
    {
      id: 2,
      title: "Scandinavian Wonders Escape | Northern Lights & Winter Wonders",
      location: "Europe",
      duration: "8 days & 7 nights",
      rating: 4.6,
      reviews: 142,
      price: 291000,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      tags: ["Sightseeing", "Group", "Unique", "Winter"],
      badges: ["Northern Lights"],
    },
    {
      id: 3,
      title: "Europe Golden Trip | Switzerland | Amsterdam & Paris Tour",
      location: "Europe",
      duration: "8 days & 7 nights",
      rating: 4.3,
      reviews: 256,
      price: 173000,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      tags: ["Luxury", "Sightseeing", "Group", "Multi Country"],
      badges: ["Multi Country"],
    },
  ];

  const activities = [
    {
      id: 101,
      title: "Scuba Diving Adventure in Maldives",
      location: "Maldives",
      duration: "2 hours",
      rating: 4.9,
      reviews: 124,
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
      tags: ["Adventure", "Water Sports"],
      badges: ["Popular"],
    },
    {
      id: 102,
      title: "Northern Lights Photography Tour",
      location: "Europe",
      duration: "4 hours",
      rating: 4.7,
      reviews: 98,
      price: 8000,
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      tags: ["Photography", "Nature", "Unique"],
      badges: ["Seasonal"],
    },
  ];

  function renderThreeCards(data) {
    const cards = [...data];
    while (cards.length < 3) {
      cards.push(...data);
    }
    return cards.slice(0, 3);
  }

  function TourCard({ tour }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 border border-gray-200">
        <div className="relative group">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {tour.badges?.map((badge, index) => (
            <span
              key={index}
              className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="p-5">
          <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
            <span>{tour.duration}</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <AiFillStar className="text-yellow-400 w-4 h-4" />
              <span>{tour.rating}</span>
              <span className="text-gray-400">({tour.reviews})</span>
            </div>
          </div>

          <Link
            href={`/tour/${tour.id}`}
            className="block text-lg font-semibold text-gray-900 mb-4 hover:text-orange-500 transition-colors line-clamp-2"
          >
            {tour.title}
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {tour.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-900">
                INR {formatPrice(tour.price)}
              </p>
              <p className="text-xs text-gray-500">per adult</p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 max-w-md shadow-md flex">
            <button
              onClick={() => setActiveTab("tours")}
              className={`flex-1 text-center px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "tours"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Tours
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`flex-1 text-center px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "activities"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Activities
            </button>
          </div>
        </div>

        {/* Country Carousel */}
        <CountryCarousel />

        {/* Conditional Content */}
        {activeTab === "tours" && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900">Europe</h2>
              <Link
                href="/europe-tours"
                className="text-orange-500 hover:text-red-600 font-semibold flex items-center gap-1"
              >
                View All
                <HiArrowNarrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderThreeCards(europeTours).map((tour, index) => (
                <TourCard key={`${tour.id}-${index}`} tour={tour} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "activities" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Activities
              </h2>
              <Link
                href="/activities"
                className="text-orange-500 hover:text-red-600 font-semibold flex items-center gap-1"
              >
                View All
                <HiArrowNarrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderThreeCards(activities).map((tour, index) => (
                <TourCard key={`${tour.id}-${index}`} tour={tour} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
