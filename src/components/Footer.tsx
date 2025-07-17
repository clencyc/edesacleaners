import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to learn more about your cleaning services.");
    window.open(`https://wa.me/254728919031?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Edesa Home Cleaners</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional cleaning services you can trust. We transform your space with 
              reliable, thorough, and affordable cleaning solutions.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-300 ml-2">4.9/5 Rating</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Couch Cleaning</li>
              <li>Mattress Cleaning</li>
              <li>Carpet & Rug Cleaning</li>
              <li>House Deep Cleaning</li>
              <li>Office Cleaning</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+254728919031"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +254 728 919031
              </a>
              <a
                href="mailto:joanedesa95@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                joanedesa95@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Nairobi, Kenya
              </div>
              <button
                onClick={openWhatsApp}
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Support
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Edesa Home Cleaners. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;