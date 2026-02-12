import React from "react";
import { useNavigate } from "react-router-dom";


export default function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="w-full bg-gray-900 text-gray-100 px-5 py-8 text-sm">
      {/* Top Footer */}
      <div className="flex flex-wrap justify-between mb-5">
        {/* Left Side */}
        <div className="flex-1 min-w-50 text-left">
          <div className="mb-2">Built for riders. Engineered for performance.</div>
          <div>
            We design and deliver high-quality bikes that combine power,
            comfort, and cutting-edge technology — made for every kind of ride.
          </div>
        </div>

        {/* Right Side Quick Links */}
        <div className="flex-1 min-w-37.5 text-right mt-4 sm:mt-0">
          <div className="font-semibold mb-2">Quick Links</div>
          <div className="text-gray-400 mb-1 cursor-pointer hover:text-white" onClick={() => navigate("/")}>Home</div>
          <div className="text-gray-400 mb-1 cursor-pointer hover:text-white"  onClick={() => navigate("/BikesMain")}>Bikes</div>
          <div className="text-gray-400 mb-1 cursor-pointer hover:text-white"  onClick={() => navigate("/AboutUsMain")}>About Us</div>
          <div className="text-gray-400 mb-1 cursor-pointer hover:text-white"  onClick={() => navigate("/ContactMain")}>Contact</div>
          
        </div>
      </div>

      {/* Below Footer */}
      <div className="pt-4 border-t border-gray-600 text-gray-400 text-center text-xs">
        BikeVerse © 2026. All rights reserved.
      </div>
    </footer>
  );
}
