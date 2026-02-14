import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./Components/pages/home/Index";
import Login from "./Components/pages/login/Login";
import Signup from "./Components/pages/signup/Signup";
import BikesMain from "./Components/pages/bikes/BikesMain";
import BikesDetailsMain from "./Components/pages/bikes/BikesDetailsMain";
import AboutUsMain from "./Components/pages/about/AboutUsMain";
import ContactMain from "./Components/pages/contact/ContactMain";

import AdminAddBikesMain from "./Components/pages/admin/AdminAddBikesMain";

export default function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Index />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Signup page */}
      <Route path="/signup" element={<Signup />} />

      {/* Bikes */}
      <Route path="/bikesmain" element={<BikesMain />} />
      <Route path="/bikesdetailsmain/:id" element={<BikesDetailsMain />} />
      {/* Admin */}
      <Route path="/adminaddbikesmain" element={<AdminAddBikesMain />}/>

      {/* Contact */}
      <Route path="/contactmain" element={<ContactMain />} />
      {/* About Us */}
      <Route path="/aboutusmain" element={<AboutUsMain />} />
    </Routes>
  );
}
