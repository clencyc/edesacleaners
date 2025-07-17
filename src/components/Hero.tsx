import React from 'react';
import { Star, Shield, Clock, MessageCircle } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your cleaning services. Can you provide more information?");
    window.open(`https://wa.me/254728919031?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.pexels.com/photos/4099465/pexels-photo-4099465.jpeg?auto=compress&w=1200&q=80"
        alt="Professional Black woman cleaning"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-green-900/60 z-10" />
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-6">
          Welcome to <span className="text-green-300">Edesa Home Cleaners</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-white max-w-2xl mx-auto font-medium mb-10 drop-shadow">
          We Don’t Just Clean — We Elevate
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={openWhatsApp}
            className="bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-colors font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Book Now
          </button>
          <a
            href="/services#services"
            className="bg-white text-green-700 px-10 py-4 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg border-2 border-green-600 hover:border-green-700"
          >
            View Services
          </a>
        </div>
        <div className="flex flex-wrap gap-4 text-base justify-center mt-6">
          <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="font-medium text-green-900">4.9/5 Rating</span>
          </div>
          <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
            <Shield className="w-4 h-4 text-green-700 mr-2" />
            <span className="font-medium text-green-900">Insured & Bonded</span>
          </div>
          <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-green-600 mr-2" />
            <span className="font-medium text-green-900">Same Day Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;