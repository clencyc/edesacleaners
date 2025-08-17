import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, MessageCircle, Phone, ArrowLeft, Clock, Shield, Sparkles } from 'lucide-react';

const OfficeCleaning = () => {
  const processSteps = [
    {
      step: 1,
      title: "Custom Scheduling",
      description: "We clean outside your business hours to avoid disruption and maintain productivity."
    },
    {
      step: 2,
      title: "Desk & Work Area Cleaning",
      description: "Desks are wiped, electronics gently dusted, and common areas sanitized for a healthy workplace."
    },
    {
      step: 3,
      title: "Washrooms & Kitchens",
      description: "We disinfect sinks, toilet bowls, and restock supplies if required for hygiene maintenance."
    },
    {
      step: 4,
      title: "Floors & Carpets",
      description: "Vacuuming or mopping depending on your setup. Carpet areas can be deep-cleaned upon request."
    },
    {
      step: 5,
      title: "Glass & Window Panels",
      description: "Polished for a streak-free finish that maintains professional appearance."
    },
    {
      step: 6,
      title: "Reporting",
      description: "We provide a cleaning checklist and report for accountability and quality assurance."
    }
  ];

  const benefits = [
    "Flexible scheduling outside business hours",
    "Professional work environment maintenance",
    "Sanitized workstations and common areas",
    "Complete washroom and kitchen cleaning",
    "Floor and carpet maintenance",
    "Quality reporting and accountability"
  ];

  const pricing = [
    { type: "Small office (1-5 desks)", price: "From KSh 3,000" },
    { type: "Medium office (6-15 desks)", price: "From KSh 5,000" },
    { type: "Large office (16-30 desks)", price: "From KSh 8,000" },
    { type: "Open plan office", price: "From KSh 10,000" },
    { type: "Co-working space", price: "Custom quote" },
    { type: "Commercial building", price: "Custom quote" }
  ];

  return (
    <>
      <Helmet>
        <title>Office & Commercial Cleaning Services | Edesa Home Cleaners</title>
        <meta name="description" content="Professional office and commercial cleaning services in Nairobi. Flexible scheduling, quality service, healthy work environment. Contact us today!" />
        <meta name="keywords" content="office cleaning, commercial cleaning, workplace hygiene, business cleaning, Nairobi, professional cleaning" />
        <link rel="canonical" href="https://edesahomecleaners.com/services/office-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <div className="text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-indigo-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Office & Commercial Cleaning
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
              Reliable and thorough cleaning for offices and commercial spaces. Create a healthy, productive work environment for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20order%20office%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 text-white px-8 py-4 rounded-lg hover:bg-indigo-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Order via WhatsApp
              </a>
              <a
                href="tel:+254728919031"
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Office Cleaning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">We work around your schedule to avoid business disruption</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Professional Standards</h3>
              <p className="text-gray-600">Maintaining high hygiene standards for your workplace</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Productivity Boost</h3>
              <p className="text-gray-600">Clean environment enhances employee productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 6-Step Office Cleaning Process</h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Competitive Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-2xl font-bold text-indigo-600">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            *Prices may vary based on frequency, location, and specific requirements. Contact us for a detailed quote.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Elevate Your Workplace!</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Create a healthier, more productive work environment for your team. Book professional office cleaning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20book%20office%20cleaning%20service.%20Please%20send%20me%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Quote on WhatsApp
            </a>
            <a
              href="tel:+254728919031"
              className="bg-indigo-500 text-white px-8 py-4 rounded-lg hover:bg-indigo-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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

export default OfficeCleaning;
