import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Bikes() {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bikes")
      .then(res => res.json())
      .then(data => setBikes(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen font-sans px-4">
      

      <div className="max-w-[1200px] mx-auto my-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3">
        {bikes.map((bike, index) => (
          <div
            key={bike._id}  // use _id from MongoDB
            className="bg-gray-300 rounded-xl p-4 flex flex-col shadow-md hover:shadow-2xl transition-transform duration-900 hover:bg-gray-50"
          >
            <img
              src={bike.image || "/default-bike.png"}  // fallback if image missing
              alt={bike.name}
              className="w-full h-58 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{bike.name}</h3>
            <p className="text-gray-600 text-sm grow mb-4">{bike.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">${bike.price}</span>
              <button
                className="bg-lime-500 hover:bg-lime-600 text-black px-3 py-1 rounded-md text-sm transition-colors"
                onClick={() => navigate(`/bikesdetailsmain/${bike._id}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
