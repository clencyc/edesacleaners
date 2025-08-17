import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, MessageCircle, Phone, ArrowLeft, Clock, Shield, Sparkles } from 'lucide-react';

const PostConstructionCleaning = () => {
  const processSteps = [
    {
      step: 1,
      title: "Site Assessment",
      description: "We begin with a detailed walk-through to assess the level of debris, dust, and surface types."
    },
    {
      step: 2,
      title: "Removal of Construction Debris",
      description: "Large particles such as cement droppings, nails, paint splatters, sawdust, and packaging materials are cleared."
    },
    {
      step: 3,
      title: "Dust Elimination",
      description: "Industrial-grade vacuums and microfiber cloths remove fine construction dust from ceilings, air vents, windowsills, walls, and fixtures."
    },
    {
      step: 4,
      title: "Floor Cleaning",
      description: "We sweep, mop, or scrub depending on the surface. Tile grout haze is removed; wooden floors are polished."
    },
    {
      step: 5,
      title: "Window & Glass Polishing",
      description: "Paint smudges and adhesives are safely removed from all glass surfaces."
    },
    {
      step: 6,
      title: "Deep Cleaning of Surfaces",
      description: "Cabinets, counters, tiles, and built-ins are wiped and disinfected."
    },
    {
      step: 7,
      title: "Final Touch Detailing",
      description: "We inspect corners and hidden spots to ensure no trace of construction remains. Space is perfumed lightly."
    },
    {
      step: 8,
      title: "Client Walkthrough & Sign-off",
      description: "A final check is done with you to ensure satisfaction."
    }
  ];

  const benefits = [
    "Complete debris removal",
    "Industrial-grade dust elimination",
    "Floor restoration and polishing",
    "Window and glass cleaning",
    "Surface disinfection",
    "Move-in ready finish"
  ];

  const pricing = [
    { type: "1-bedroom apartment", price: "From KSh 8,000" },
    { type: "2-bedroom apartment", price: "From KSh 12,000" },
    { type: "3-bedroom house", price: "From KSh 15,000" },
    { type: "4-bedroom house", price: "From KSh 20,000" },
    { type: "Commercial space", price: "Custom quote" },
    { type: "Office building", price: "Custom quote" }
  ];

  return (
    <>
      <Helmet>
        <title>Post-Construction Cleaning Services | Edesa Home Cleaners</title>
        <meta name="description" content="Professional post-construction cleaning in Nairobi. Complete debris removal, dust elimination, move-in ready finish. Expert construction cleanup services." />
        <meta name="keywords" content="post construction cleaning, debris removal, construction cleanup, renovation cleaning, Nairobi, move-in cleaning" />
        <link rel="canonical" href="https://edesahomecleaners.com/services/post-construction-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <div className="text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-orange-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Post-Construction Cleaning
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
              Thorough cleaning after construction or renovation to remove dust, debris, and residues. Move in to a spotless space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20order%20post-construction%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Order via WhatsApp
              </a>
              <a
                href="tel:+254728919031"
                className="bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Construction Cleanup?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Get your space move-in ready faster</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
              <p className="text-gray-600">Industrial-grade tools for thorough cleanup</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Move-in Ready</h3>
              <p className="text-gray-600">Spotless finish ready for occupancy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 8-Step Construction Cleanup Process</h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Clean</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Optional Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Curtain Cleaning</h3>
              <p className="text-gray-600">Steam while hanging or remove for deep wash</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Carpet Shampooing</h3>
              <p className="text-gray-600">Low-moisture or steam-based cleaning depending on fabric</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Appliance Detailing</h3>
              <p className="text-gray-600">Fridge & oven degreasing, odor control, and polishing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Competitive Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-2xl font-bold text-orange-600">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            *Prices may vary based on debris level, space size, and specific requirements. Contact us for a detailed assessment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Move In?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Transform your construction site into a pristine, move-in ready space. Contact us today for a quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20book%20post-construction%20cleaning%20service.%20Please%20send%20me%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Quote on WhatsApp
            </a>
            <a
              href="tel:+254728919031"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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

export default PostConstructionCleaning;
