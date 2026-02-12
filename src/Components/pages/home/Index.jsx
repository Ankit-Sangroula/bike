import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Hero from "./Hero";
import Bikes from '../bikes/Bikes';
import Contact from '../contact/Contact';
import AboutUs from '../about/AboutUs';

export default function Index() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />

      {/* Bikes Section */}
      <section className="my-20 bg-gray-100">
        <h2 className="text-center font-bold text-5xl mb-10">Bikes</h2>
        <Bikes />
      </section>

      
        <Contact />
     

      {/* About Us Section */}
      <section className="my-20">
        <h2 className="text-center font-bold text-5xl mb-10">About Us</h2>
        <AboutUs />
      </section>

      <Footer />
    </div>
  );
}
