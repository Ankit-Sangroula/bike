import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";

export default function Bikes() {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bikes")  // get all bikes
      .then(res => res.json())
      .then(data => setBikes(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen font-sans px-4">
      <div className="max-w-[1200px] mx-auto my-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3">
        {bikes.map((bike) => (
          <div
            key={bike._id}   // unique id from MongoDB
            className="bg-gray-300 rounded-xl p-4 flex flex-col shadow-md hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={bike.image || "/default-bike.png"}
              alt={bike.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{bike.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{bike.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">${bike.price}</span>
              <button
                className="bg-lime-500 hover:bg-lime-600 text-black px-3 py-1 rounded-md text-sm"
                onClick={() => navigate(`/bikesdetailsmain/${bike._id}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}