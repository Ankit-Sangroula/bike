import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

export default function BikesDetails() {
  const { id } = useParams();

  const bikes = [
    {
      name: "Honda X-ADV",
      detail:
        "Adventure meets comfort — perfect for city streets and off-road trails.",
      price: "$13,500",
      img: "/bike2.png",
      features: [
        "745cc liquid-cooled engine",
        "Automatic DCT transmission",
        "Traction control system",
        "LED lighting system",
      ],
      specs: {
        Engine: "745cc",
        Power: "58 HP",
        Mileage: "27 km/l",
        Weight: "236 kg",
      },
    },
    {
      name: "KTM RC 200",
      detail:
        "Lightweight sport bike built for speed and agile handling on twisty roads.",
      price: "$4,500",
      img: "/bike3.png",
      features: [
        "199cc liquid-cooled engine",
        "ABS braking system",
        "Digital instrument cluster",
        "Sport riding posture",
      ],
      specs: {
        Engine: "199cc",
        Power: "25 HP",
        Mileage: "35 km/l",
        Weight: "160 kg",
      },
    },
    {
      name: "Yamaha Ray ZR 125",
      detail:
        "Stylish scooter designed for fuel efficiency and smooth urban rides.",
      price: "$1,500",
      img: "/bike4.png",
      features: [
        "125cc fuel-injected engine",
        "Smart motor generator",
        "Lightweight body",
        "Digital display",
      ],
      specs: {
        Engine: "125cc",
        Power: "8 HP",
        Mileage: "50 km/l",
        Weight: "99 kg",
      },
    },
    {
      name: "Royal Enfield Hunter 350",
      detail:
        "Classic retro design with modern performance — ideal for cruising.",
      price: "$4,000",
      img: "/bike5.png",
      features: [
        "349cc J-series engine",
        "Dual-channel ABS",
        "Retro styling",
        "Alloy wheels",
      ],
      specs: {
        Engine: "349cc",
        Power: "20 HP",
        Mileage: "36 km/l",
        Weight: "181 kg",
      },
    },
    {
      name: "Yamaha R15 V4",
      detail:
        "Sporty and aerodynamic, built for speed and a thrilling ride experience.",
      price: "$5,000",
      img: "/bike6.png",
      features: [
        "155cc VVA engine",
        "Quick shifter",
        "Traction control",
        "LED projector headlight",
      ],
      specs: {
        Engine: "155cc",
        Power: "18 HP",
        Mileage: "40 km/l",
        Weight: "142 kg",
      },
    },
    {
      name: "Bajaj Pulsar RS 200",
      detail:
        "Fully-faired sports bike with excellent power and road presence.",
      price: "$3,000",
      img: "/bike7.png",
      features: [
        "199cc triple spark engine",
        "Dual-channel ABS",
        "Perimeter frame",
        "Sport fairing design",
      ],
      specs: {
        Engine: "199cc",
        Power: "24 HP",
        Mileage: "35 km/l",
        Weight: "166 kg",
      },
    },
    {
      name: "Yamaha MT 15 V2",
      detail:
        "Aggressive naked street bike, perfect for city commuting and weekend rides.",
      price: "$4,200",
      img: "/bike8.png",
      features: [
        "155cc liquid-cooled engine",
        "Upside-down front forks",
        "Traction control",
        "LED headlamp",
      ],
      specs: {
        Engine: "155cc",
        Power: "18 HP",
        Mileage: "45 km/l",
        Weight: "141 kg",
      },
    },
    {
      name: "Hero Xpulse 200 4V",
      detail:
        "Lightweight adventure bike built for off-road trails and urban roads.",
      price: "$1,800",
      img: "/bike9.png",
      features: [
        "199cc oil-cooled engine",
        "Long travel suspension",
        "Bluetooth connectivity",
        "Dual-purpose tires",
      ],
      specs: {
        Engine: "199cc",
        Power: "19 HP",
        Mileage: "40 km/l",
        Weight: "158 kg",
      },
    },
  ];

  const bike = bikes[id];

  if (!bike) {
    return <div className="text-center mt-10">Bike not found</div>;
  }

  return (
    <div className="min-h-screen font-sans px-4">
      

      <div className="max-w-[1100px] mx-auto my-10 space-y-10">
        {/* Top Box */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-6">
          <img
            src={bike.img}
            alt={bike.name}
            className="w-full h-80 object-cover rounded-lg"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{bike.name}</h2>
            <p className="text-gray-600 mb-4">{bike.detail}</p>
            <span className="text-xl font-semibold text-lime-600">
              {bike.price}
            </span>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>

          <p className="text-gray-600 mb-4">
            Reviewers highlight the {bike.name}'s smooth and refined engine,
            light clutch, and easy gear shifts, making it beginner-friendly and
            reliable. The bike offers comfortable seating, stable handling,
            responsive brakes, and stylish design combined with practical
            features and strong service support.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {bike.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Key Specs */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Key Specifications</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(bike.specs).map(([key, value], index) => (
              <div
                key={index}
                className="flex justify-between bg-gray-100 p-3 rounded-md"
              >
                <span className="font-medium">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}
