import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-primary-500">Edesa Home Cleaners</Link>
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+254728919031"
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+254 728 919031</span>
            </a>
            <a
              href="https://wa.me/254728919031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 w-full text-left" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 w-full text-left" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 w-full text-left" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/faq" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 w-full text-left" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 w-full text-left" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <a
                href="tel:+254728919031"
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">+254 728 919031</span>
              </a>
              <a
                href="https://wa.me/254728919031"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center text-sm font-medium w-fit"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;