import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Bikes() {
  const navigate = useNavigate();

  const bikes = [
    { 
      name: "Honda X-ADV",
      detail: "Adventure meets comfort — perfect for city streets and off-road trails.", 
      price: "$13,500", 
      img: "/bike2.png" 
    },
    { 
      name: "KTM RC 200",
      detail: "Lightweight sport bike built for speed and agile handling on twisty roads.", 
      price: "$4,500", 
      img: "/bike3.png" 
    },
    { 
      name: "Yamaha Ray ZR 125",
      detail: "Stylish scooter designed for fuel efficiency and smooth urban rides.", 
      price: "$1,500", 
      img: "/bike4.png" 
    },
    { 
      name: "Royal Enfield Hunter 350",
      detail: "Classic retro design with modern performance — ideal for cruising.", 
      price: "$4,000", 
      img: "/bike5.png" 
    },
    { 
      name: "Yamaha R15 V4",
      detail: "Sporty and aerodynamic, built for speed and a thrilling ride experience.", 
      price: "$5,000", 
      img: "/bike6.png" 
    },
    { 
      name: "Bajaj Pulsar RS 200",
      detail: "Fully-faired sports bike with excellent power and road presence.", 
      price: "$3,000", 
      img: "/bike7.png" 
    },
    { 
      name: "Yamaha MT 15 V2",
      detail: "Aggressive naked street bike, perfect for city commuting and weekend rides.", 
      price: "$4,200", 
      img: "/bike8.png" 
    },
    { 
      name: "Hero Xpulse 200 4V",
      detail: "Lightweight adventure bike built for off-road trails and urban roads.", 
      price: "$1,800", 
      img: "/bike9.png" 
    },
  ];

  return (
    <div className="min-h-screen font-sans px-4">
      

      <div className="max-w-[1200px] mx-auto my-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-xl p-4 flex flex-col shadow-md hover:shadow-2xl transition-transform duration-900 hover:bg-gray-50"
          >
            <img
              src={bike.img}
              alt={bike.name}
              className="w-full h-58 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{bike.name}</h3>
            <p className="text-gray-600 text-sm grow mb-4">{bike.detail}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">{bike.price}</span>
              <button
                className="bg-lime-500 hover:bg-lime-600 text-black px-3 py-1 rounded-md text-sm transition-colors"
                onClick={() => navigate(`/bikesdetailsmain/${index}`)}
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
