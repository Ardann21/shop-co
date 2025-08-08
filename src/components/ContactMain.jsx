import React, { useState, useMemo } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import contact from '../assets/contactt.jpg'; // Assuming this is the contact image
// The local image import has been removed as it's not accessible in this environment.

// Define the map container style and options
const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
};

const options = {
  disableDefaultUI: true, // Hides map controls for a cleaner look
  zoomControl: true, // Keeps the zoom controls visible
};

const ContactMain = () => {

  const apiKey = "";
  
  // State for the map center, using a memo hook to ensure it's stable
  const center = useMemo(() => ({
    lat: 34.0522, // Example latitude (Los Angeles)
    lng: -118.2437, // Example longitude (Los Angeles)
  }), []);

  // Hook to load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <div className="flex flex-col items-center font-sans min-h-screen">
        
      
     
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
            
          <div className="relative z-10 text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-500">
              We're Here to Help
            </h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto ">
              Get in touch with our friendly support team for any questions or feedback.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6 md:p-12 -mt-20 my-12 relative z-20">

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form Section */}
          <div className="md:order-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none transition-shadow duration-200"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Details Section */}
          <div className="md:order-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Information</h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <div className="flex items-center gap-4">
                <FiMail size={24} className="text-red-500" />
                <span>contact@shop.co</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone size={24} className="text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-4">
                <FiMapPin size={24} className="text-red-500 flex-shrink-0 mt-1" />
                <span>123 Fashion Blvd, Suite 200, Metropolis, CA 90210</span>
              </div>
            </div>
            
            {/* Map Component */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={12}
                  options={options}
                >
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                <div className="flex items-center justify-center bg-gray-200 text-gray-600 h-96 rounded-xl">
                  Loading map...
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactMain;
