import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Footer";

export default function BikesDetailsMain() {
  const { id } = useParams(); // gets bike id from URL
  const [bike, setBike] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/bikes/${id}`) // get one bike
      .then(res => res.json())
      .then(data => setBike(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!bike) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen font-sans px-4">
      <div className="max-w-6xl mx-auto my-10 space-y-10">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-6">
          <img
            src={bike.image || "/default-bike.png"}
            alt={bike.name}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{bike.name}</h2>
            <p className="text-gray-600 mb-4">{bike.description}</p>
            <span className="text-xl font-semibold text-lime-600">${bike.price}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}