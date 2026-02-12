import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function About() {
  return (
    <div className="min-h-screen font-sans">
      

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About BikeVerse
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          BikeVerse is a motorcycle information platform designed for riders,
          enthusiasts, and beginners who want to explore detailed bike
          specifications, features, and expert insights — all in one place.
        </p>
      </div>

      {/* What We Do */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/about-bike.png"
          alt="Motorcycle Information"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 mb-4">
            We provide detailed information about a wide range of motorcycles —
            from sport bikes and cruisers to adventure and commuter models.
            Our platform focuses on helping users understand each bike’s
            performance, features, and technical specifications.
          </p>
          <p className="text-gray-600">
            Whether you're comparing models or researching your next ride,
            BikeVerse makes exploration simple and organized.
          </p>
        </div>
      </div>

      {/* Why This Platform */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Why BikeVerse?</h2>
          <p className="text-gray-600 mt-4">
            Built for clarity, comparison, and motorcycle passion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Detailed Specifications</h3>
            <p className="text-gray-600">
              Explore engine capacity, power, mileage, weight, and technical
              specifications for every listed motorcycle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature Highlights</h3>
            <p className="text-gray-600">
              Learn about key features, performance advantages, and design
              elements that make each bike unique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Clean & Organized Layout</h3>
            <p className="text-gray-600">
              Our structured design ensures easy comparison and smooth browsing
              experience across devices.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our mission is to create a reliable and user-friendly motorcycle
          information hub where riders can explore, compare, and understand
          bikes before making informed decisions.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-lime-400">100+</h4>
            <p className="text-gray-300">Bike Models</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-lime-400">10+</h4>
            <p className="text-gray-300">Top Brands</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-lime-400">Detailed</h4>
            <p className="text-gray-300">Specifications</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-lime-400">User-Friendly</h4>
            <p className="text-gray-300">Design</p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Explore. Compare. Understand.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          BikeVerse is built for motorcycle enthusiasts who want more than
          just images — we provide structured information that helps you make
          smarter decisions.
        </p>
      </div>

      
    </div>
  );
}
