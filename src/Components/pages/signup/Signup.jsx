import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formVal, setFormVal] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formVal);
    alert("Signing up...");
    navigate("/login"); 
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log("Signup cancelled");
    alert("Cancelled");
    navigate("/"); 
  };

  const goToLogin = () => {
    console.log("Go to Login clicked");
    navigate("/login"); 
  };

  return (
    <div className="bg-green-400 flex items-center justify-center min-h-screen px-4">
      <div className="bg-gray-100 rounded-xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-center text-2xl font-bold text-gray-900 mb-2">Sign Up</h1>
        <h3 className="text-center text-gray-700 mb-6">Create a new account</h3>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={formVal.fullname}
              onChange={(e) => setFormVal((prev) => ({ ...prev, fullname: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={formVal.email}
              onChange={(e) => setFormVal((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="*********"
              value={formVal.password}
              onChange={(e) => setFormVal((prev) => ({ ...prev, password: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="text-center text-gray-700 text-sm">
            Already have an account?
            <span className="text-blue-600 font-medium ml-1 cursor-pointer" onClick={goToLogin}>
              Login
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleCancel}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSignup}
              className="flex-1 bg-green-500 text-black py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
