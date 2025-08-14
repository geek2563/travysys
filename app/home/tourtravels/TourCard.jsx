import React from "react";

const TourCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#E7F2FD] rounded-lg shadow p-4 max-w-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-[#043226] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-[#043226] text-white px-4 py-2 rounded hover:opacity-90">
        View Tour
      </button>
    </div>
  );
};

export default TourCard;
