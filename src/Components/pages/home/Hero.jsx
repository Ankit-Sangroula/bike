import React from "react";

export default function Hero() {
  return (
    <section className="px-10 py-16 text-black">
      {/* Top Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left">
        Ride Fast. Ride Smart. Ride Your Dream.
      </h2>

      {/* Content Area */}
      <div className="flex flex-wrap items-center justify-between gap-10">
        {/* Left Text */}
        <div className="flex-1 min-w-[300px]">
          <p className="text-lg md:text-xl leading-relaxed mb-5 max-w-xl">
            Explore a wide range of bikes designed for every kind of ride. From
            smooth city cruisers to powerful off-road machines, learn about
            their features, performance, and what makes each ride unique. Find
            the perfect bike to match your lifestyle and passion for the road.
          </p>

          <button className="px-7 py-3 bg-green-400 text-black rounded-md text-lg font-medium hover:bg-green-500 transition-colors">
            Explore More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 min-w-[300px] text-right">
          <img
            src="/bike1.png"
            alt="bike"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
