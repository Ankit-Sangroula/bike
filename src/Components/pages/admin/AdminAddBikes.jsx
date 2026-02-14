import React, { useState } from "react";

export default function AdminAddBikes() {
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // for edit feature

  // Properly structured bikes array
  const [bikes, setBikes] = useState([
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
  ]);

  const [newBike, setNewBike] = useState({
    name: "",
    detail: "",
    price: "",
    img: "",
  });

  // Add or Edit bike
  const handleAddOrEditBike = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Editing existing bike
      const updatedBikes = [...bikes];
      updatedBikes[editingIndex] = newBike;
      setBikes(updatedBikes);
    } else {
      // Adding new bike
      setBikes([...bikes, newBike]);
    }
    setNewBike({ name: "", detail: "", price: "", img: "" });
    setShowModal(false);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updated = bikes.filter((_, i) => i !== index);
    setBikes(updated);
  };

  const handleEdit = (index) => {
    setNewBike(bikes[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      {/* Add Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700"
        >
          + Add Bike
        </button>
      </div>

      {/* Bikes List */}
      <div className="space-y-10 ">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-6"
          >
            <img
              src={bike.img}
              alt={bike.name}
              className="w-full h-72 object-cover rounded-lg"
            />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{bike.name}</h2>
                <p className="text-gray-600 mb-3">{bike.detail}</p>
                <span className="text-lg font-semibold text-lime-600">
                  {bike.price}
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">
              {editingIndex !== null ? "Edit Bike" : "Add New Bike"}
            </h2>

            <form onSubmit={handleAddOrEditBike} className="space-y-4">
              <input
                type="text"
                placeholder="Bike Name"
                value={newBike.name}
                onChange={(e) =>
                  setNewBike({ ...newBike, name: e.target.value })
                }
                className="w-full border p-2 rounded-md"
                required
              />

              <textarea
                placeholder="Bike Details"
                value={newBike.detail}
                onChange={(e) =>
                  setNewBike({ ...newBike, detail: e.target.value })
                }
                className="w-full border p-2 rounded-md"
                required
              ></textarea>

              <input
                type="text"
                placeholder="Price"
                value={newBike.price}
                onChange={(e) =>
                  setNewBike({ ...newBike, price: e.target.value })
                }
                className="w-full border p-2 rounded-md"
                required
              />

              {/* File upload + preview */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageURL = URL.createObjectURL(file);
                    setNewBike({ ...newBike, img: imageURL });
                  }
                }}
                className="w-full border p-2 rounded-md"
              />
              {newBike.img && (
                <img
                  src={newBike.img}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md mt-2"
                />
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingIndex(null);
                    setNewBike({ name: "", detail: "", price: "", img: "" });
                  }}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
