import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="w-full bg-gray-50 px-8 py-4 flex justify-end items-center">
      <nav className="flex gap-5 items-center">
        <span
          className="text-black font-medium cursor-pointer hover:text-green-500 transition-colors"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span
          className="text-black font-medium cursor-pointer hover:text-green-500 transition-colors"
          onClick={() => navigate("/bikesmain")}
        >
          Bikes
        </span>
        <span
          className="text-black font-medium cursor-pointer hover:text-green-500 transition-colors"
          onClick={() => navigate("/contactmain")}
        >
          Contact
        </span>
        <span
          className="text-black font-medium cursor-pointer hover:text-green-500 transition-colors"
          onClick={() => navigate("/aboutusmain")}
        >
          About Us
        </span>

        <button
          onClick={handleLogin}
          className="px-6 py-1 bg-green-400 text-black rounded-full text-base cursor-pointer hover:bg-green-500 transition-colors"
        >
          Login
        </button>
        <button
          onClick={handleSignup}
          className="px-6 py-1 bg-green-400 text-black rounded-full text-base cursor-pointer hover:bg-green-500 transition-colors"
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
}
