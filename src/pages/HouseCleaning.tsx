import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, MessageCircle, Phone, ArrowLeft, Clock, Shield, Sparkles } from 'lucide-react';

const HouseCleaning = () => {
  const processSteps = [
    {
      step: 1,
      title: "Pre-Clean Walkthrough",
      description: "We tour your space with you to identify priority areas and understand your specific needs."
    },
    {
      step: 2,
      title: "Surface Dusting",
      description: "We dust shelves, furniture, ceiling corners, and window sills throughout your home."
    },
    {
      step: 3,
      title: "Wiping & Disinfecting",
      description: "Kitchen counters, tables, and bathroom surfaces are wiped down with eco-friendly disinfectants."
    },
    {
      step: 4,
      title: "Floor Cleaning",
      description: "Depending on your surface (tile, wood, or vinyl), we mop using the appropriate solution. For heavy-duty work, we can scrub floors with specialized tools."
    },
    {
      step: 5,
      title: "Trash Disposal",
      description: "We empty all bins and can replace liners upon request."
    },
    {
      step: 6,
      title: "Final Touches",
      description: "We fluff cushions, arrange items neatly, and leave your space fresh and elevated."
    }
  ];

  const benefits = [
    "Comprehensive deep cleaning",
    "Eco-friendly cleaning products",
    "Kitchen and bathroom sanitization",
    "Floor cleaning and mopping",
    "Dust removal from all surfaces",
    "Trash disposal and organization"
  ];

  const pricing = [
    { type: "1-bedroom apartment", price: "From KSh 4,000" },
    { type: "2-bedroom apartment", price: "From KSh 5,500" },
    { type: "3-bedroom house", price: "From KSh 7,000" },
    { type: "4-bedroom house", price: "From KSh 8,500" },
    { type: "5+ bedroom house", price: "From KSh 10,000" },
    { type: "Office space", price: "Custom quote" }
  ];

  return (
    <>
      <Helmet>
        <title>General House Deep Cleaning Services | Edesa Home Cleaners</title>
        <meta name="description" content="Professional house deep cleaning services in Nairobi. Comprehensive cleaning for kitchens, bathrooms, living areas. Eco-friendly products, reliable service." />
        <meta name="keywords" content="house cleaning, deep cleaning, home cleaning, kitchen cleaning, bathroom cleaning, Nairobi, professional cleaning" />
        <link rel="canonical" href="https://edesahomecleaners.com/services/house-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <div className="text-center">
            <Home className="w-16 h-16 mx-auto mb-6 text-purple-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General House Deep Cleaning
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Comprehensive deep cleaning for your entire home, including kitchens, bathrooms, and living areas. We elevate your living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20order%20house%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Order via WhatsApp
              </a>
              <a
                href="tel:+254728919031"
                className="bg-white text-purple-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our House Cleaning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
              <p className="text-gray-600">Spend more time with family while we handle the cleaning</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Safe Products</h3>
              <p className="text-gray-600">Eco-friendly cleaning products safe for your family</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Deep Clean</h3>
              <p className="text-gray-600">Thorough cleaning that reaches every corner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 6-Step Cleaning Process</h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-2xl font-bold text-purple-600">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            *Prices may vary based on condition and location. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Home Today!</h2>
          <p className="text-xl mb-8 text-purple-100">
            Experience the joy of coming home to a spotlessly clean space. Book now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20book%20house%20cleaning%20service.%20Please%20send%20me%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Quote on WhatsApp
            </a>
            <a
              href="tel:+254728919031"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call for Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HouseCleaning;
