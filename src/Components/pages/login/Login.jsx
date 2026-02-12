import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Controlled form state
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", formVal);
    alert("Logging in...");
    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log("Login cancelled");
    alert("Cancelled");
  };

  const goToSignup = (e) => {
    e.preventDefault();
    console.log("Go to Signup clicked");
    alert("Go to Signup");
    navigate("/Signup");
  };

  return (
    <div className="bg-green-400 min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-100 rounded-xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Login
        </h1>
        <h3 className="text-center text-gray-600 font-medium mb-6">
          Sign in to your account
        </h3>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={formVal.email}
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              value={formVal.password}
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded "
            />
            <span className="text-center text-gray-700 text-sm">Remember Me</span>
          </label>

          <div className="text-center text-gray-700 text-sm">
            Don't have an account?
            <span
              onClick={goToSignup}
              className="text-blue-600 font-medium ml-1 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleCancel}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleLogin}
              className="flex-1 bg-green-500 text-black py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
