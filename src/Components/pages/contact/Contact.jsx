import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Contact() {
  return (
    <>
     
      <div className="min-h-screen bg-gray-100 font-sans py-20 px-4">
        <section className="max-w-6xl mx-auto">
          {/* Box container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:grid md:grid-cols-2">
            {/* Image on Left */}
            <div className="w-full h-64 md:h-auto">
              <img
                src="/contact.png"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form on Right */}
            <div className="p-8 md:p-12 w-full">
              <h2 className="text-5xl  text-center font-bold mb-6 text-gray-900">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> support@bikeverse.com
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span> +977 98XXXXXXXX
              </p>
              <p className="text-gray-600 mb-6">
                <span className="font-semibold">Location:</span> Kathmandu, Nepal
              </p>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-500 w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-500 w-full"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-500 w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 rounded-lg transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

     
    </>
  );
}
