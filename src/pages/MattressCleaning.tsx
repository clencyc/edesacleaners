import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BedDouble, CheckCircle, MessageCircle, Phone, ArrowLeft, Clock, Shield, Sparkles } from 'lucide-react';

const MattressCleaning = () => {
  const processSteps = [
    {
      step: 1,
      title: "Dust Extraction",
      description: "We use a high-powered vacuum with HEPA filtration to remove dead skin cells, dust mites, and allergens."
    },
    {
      step: 2,
      title: "Steam Penetration",
      description: "Hot steam penetrates deep into the mattress layers, killing bacteria and neutralizing odors."
    },
    {
      step: 3,
      title: "Spot Treatment",
      description: "Urine or sweat stains are gently treated using non-toxic enzymatic cleaners."
    },
    {
      step: 4,
      title: "Sanitization",
      description: "We apply a safe antimicrobial spray to prevent future infestations."
    },
    {
      step: 5,
      title: "Drying",
      description: "Air movers or sun-drying (if permitted) ensure minimal moisture remains."
    },
    {
      step: 6,
      title: "Fresh Linen Option",
      description: "Optional — we can help replace your bed linen post-cleaning."
    }
  ];

  const benefits = [
    "Eliminates dust mites and allergens",
    "Removes sweat and urine stains",
    "Kills bacteria and viruses",
    "Neutralizes odors completely",
    "Improves sleep quality",
    "Extends mattress lifespan"
  ];

  const pricing = [
    { type: "Single mattress", price: "From KSh 1,200" },
    { type: "3x6 mattress", price: "From KSh 1,500" },
    { type: "4x6 mattress", price: "From KSh 1,600" },
    { type: "5x6 mattress", price: "From KSh 1,800" },
    { type: "6x6 mattress", price: "From KSh 2,000" },
    { type: "King size mattress", price: "From KSh 2,500" }
  ];

  return (
    <>
      <Helmet>
        <title>Mattress Deep Cleaning Services | Edesa Home Cleaners</title>
        <meta name="description" content="Professional mattress deep cleaning in Nairobi. Remove dust mites, allergens, stains, and odors. Safe, effective, and affordable mattress cleaning services." />
        <meta name="keywords" content="mattress cleaning, dust mites removal, allergen cleaning, mattress sanitization, Nairobi, deep cleaning" />
        <link rel="canonical" href="https://edesahomecleaners.com/services/mattress-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <div className="text-center">
            <BedDouble className="w-16 h-16 mx-auto mb-6 text-blue-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mattress Deep Cleaning
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Professional mattress cleaning to remove dust mites, allergens, and stains for a healthier sleep environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20order%20mattress%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Order via WhatsApp
              </a>
              <a
                href="tel:+254728919031"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Clean Your Mattress?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Better Sleep</h3>
              <p className="text-gray-600">Clean mattress promotes healthier, more restful sleep</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Allergy Relief</h3>
              <p className="text-gray-600">Removes allergens and dust mites that trigger reactions</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Hygiene & Health</h3>
              <p className="text-gray-600">Eliminates bacteria and maintains sleeping hygiene</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 6-Step Deep Cleaning Process</h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Health Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Affordable Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-2xl font-bold text-blue-600">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            *Prices may vary based on condition and location. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sleep Better Tonight!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your professional mattress cleaning and enjoy a healthier sleep environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20book%20mattress%20cleaning%20service.%20Please%20send%20me%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Quote on WhatsApp
            </a>
            <a
              href="tel:+254728919031"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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

export default MattressCleaning;
