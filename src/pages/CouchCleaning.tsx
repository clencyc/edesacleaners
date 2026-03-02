import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sofa, CheckCircle, MessageCircle, Phone, ArrowLeft, Clock, Shield, Sparkles } from 'lucide-react';

const CouchCleaning = () => {
  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Our technician inspects your couch to identify fabric type, stains, and areas requiring extra attention."
    },
    {
      step: 2,
      title: "Vacuuming",
      description: "We begin by deep vacuuming to remove dust, crumbs, and pet hair."
    },
    {
      step: 3,
      title: "Stain Treatment",
      description: "Tough stains are treated with eco-safe pre-sprays customized to the upholstery type."
    },
    {
      step: 4,
      title: "Steam Cleaning",
      description: "High-temperature steam is used to kill germs and lift embedded dirt."
    },
    {
      step: 5,
      title: "Deodorizing & Drying",
      description: "A gentle fabric-safe deodorizer is applied, and we use fast-dry technology to minimize downtime."
    },
    {
      step: 6,
      title: "Final Check",
      description: "We confirm the cleanliness and invite you to inspect before leaving."
    }
  ];

  const benefits = [
    "Removes allergens and dust mites",
    "Eliminates odors and bacteria",
    "Extends furniture lifespan",
    "Eco-friendly cleaning products",
    "Professional-grade equipment",
    "Same-day service available"
  ];

  const pricing = [
    { type: "2-seater sofa", price: "From KSh 2,000" },
    { type: "3-seater sofa", price: "From KSh 2,300" },
    { type: "4-seater sofa", price: "From KSh 2,500" },
    { type: "L-shaped sofa", price: "From KSh 3,500" },
    { type: "Armchair", price: "From KSh 1,500" },
    { type: "Ottoman", price: "From KSh 800" }
  ];

  const faqs = [
    {
      question: "How much does sofa cleaning cost in Nairobi?",
      answer: "Pricing starts from KSh 2,000 depending on sofa size, fabric type, and stain level. Contact us for a quick quote."
    },
    {
      question: "How long does sofa cleaning take to dry?",
      answer: "Most sofas dry within 2–4 hours with our fast-drying process, depending on airflow and fabric thickness."
    },
    {
      question: "Do you serve areas like Westlands and Kilimani?",
      answer: "Yes. We serve homes across Nairobi including Westlands, Kilimani, Kileleshwa, Lavington, Karen, Runda, and Lang'ata."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sofa & Upholstery Cleaning in Nairobi | Edesa Home Cleaners</title>
        <meta name="description" content="Restore your sofas to like-new condition. Edesa offers professional sofa and upholstery cleaning in Nairobi. Safe for all fabric types. Book today!" />
        <meta name="keywords" content="couch cleaning, upholstery cleaning, sofa cleaning, stain removal, Nairobi, furniture cleaning" />
        <link rel="canonical" href="https://edesacleaners.co.ke/sofa-cleaning-nairobi" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <div className="text-center">
            <Sofa className="w-16 h-16 mx-auto mb-6 text-green-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Sofa & Upholstery Cleaning in Nairobi
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Deep cleaning and stain removal for all types of couches and sofas. Restore freshness and comfort to your living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20order%20couch%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Order via WhatsApp
              </a>
              <a
                href="tel:+254728919031"
                className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Looking for reliable sofa cleaning Nairobi homeowners trust? Your sofa handles daily spills, dust, pet dander, and odors that regular wiping cannot remove. Our professional sofa cleaning Nairobi service uses fabric-safe, eco-friendly methods to lift deep dirt and sanitize upholstery without damage. Edesa's trained cleaners serve Westlands, Kilimani, Kileleshwa, Lavington, Karen, Runda, and Lang'ata with fast-drying, child-safe results.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Couch Cleaning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">Same-day and next-day appointments available</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Safe & Eco-Friendly</h3>
              <p className="text-gray-600">Non-toxic products safe for kids and pets</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Professional Results</h3>
              <p className="text-gray-600">Deep cleaning that extends furniture life</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
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
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
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
                <p className="text-2xl font-bold text-green-600">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            *Prices may vary based on condition and location. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Couch?</h2>
          <p className="text-xl mb-8 text-green-100">
            Book your professional couch cleaning service today and see the difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20book%20couch%20cleaning%20service.%20Please%20send%20me%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Quote on WhatsApp
            </a>
            <a
              href="tel:+254728919031"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
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

export default CouchCleaning;
