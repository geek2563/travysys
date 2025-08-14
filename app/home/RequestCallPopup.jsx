"use client";

import { useState } from "react";

export default function RequestCallPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    setIsOpen(false); // close popup
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#EE2E31] text-white px-6 py-2 rounded-full hover:bg-[#c32225] transition"
      >
        Request a Call
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4 text-[#071E22]">
              Request a Callback
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#1D7874] focus:border-[#1D7874]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#1D7874] focus:border-[#1D7874]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#1D7874] focus:border-[#1D7874]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D7874] text-white py-2 rounded-md hover:bg-[#165f5b] transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
