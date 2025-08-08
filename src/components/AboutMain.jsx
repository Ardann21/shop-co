import React from 'react';
import shop from '../assets/shopp.webp';
import shopp from '../assets/shopp1.jpg';
import jane from '../assets/jane.jpg';

const AboutMain = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  ">
      
      {/* Hero Section */}
      <div className="relative w-full h-80 flex items-center justify-center bg-gray-900 overflow-hidden rounded-b-xl shadow-lg max-w-[1240px] mx-auto">
        <img 
          src={shopp} 
          alt="SHOP.CO Fashion" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Our Story, Our Style, Our Commitment
          </h1>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto text-white font-bold">
            Where passion for fashion meets a promise of quality and sustainability.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-6xl px-4 md:px-8 py-12">
        
        {/* Our Story Section */}
        <div className="mb-16 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-left">
              From a Vision to Your Wardrobe
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-left">
              SHOP.CO began in a small garage with a big idea: to democratize fashion. We noticed that high-quality, on-trend clothing was often out of reach for the everyday shopper. Fueled by late-night coffee and a shared passion for style, we started designing and sourcing pieces that we would love to wear ourselves. Our mission was to prove that you don't have to choose between exceptional quality and an affordable price.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={shop}
              alt="A team working together" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">
                Every fabric is hand-selected and every design is tested for comfort and durability. We believe in clothes that last, not just for a season, but for years to come.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Sustainable Style</h3>
              <p className="text-gray-600">
                We are committed to ethical manufacturing and reducing our environmental footprint. We source sustainable materials and partner with factories that uphold fair labor practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Customer Empowerment</h3>
              <p className="text-gray-600">
                We're more than a store; we're a partner in your style journey. Our goal is to provide you with a seamless experience and a wardrobe that makes you feel confident and unique.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
            Meet the Makers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src={jane}
                alt="Jane Doe" 
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl text-gray-800">Jane Doe</h3>
              <p className="text-red-500 font-semibold">Co-Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                The visionary behind SHOP.CO, Jane drives our mission to make high-quality fashion accessible to everyone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src={jane}
                alt="John Smith" 
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl text-gray-800">John Smith</h3>
              <p className="text-red-500 font-semibold">Head of Design</p>
              <p className="text-gray-600 mt-2">
                John leads our creative team, ensuring every piece we sell is both stylish and timeless.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src={jane}
                alt="Emily White" 
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl text-gray-800">Emily White</h3>
              <p className="text-red-500 font-semibold">Chief Operations Officer</p>
              <p className="text-gray-600 mt-2">
                Emily ensures our operations run smoothly, from sourcing sustainable materials to getting your order to your doorstep.
              </p>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default AboutMain;