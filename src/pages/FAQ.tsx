import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, MessageCircle, Phone, HelpCircle } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What cleaning services do you offer?",
    answer: "At Edesa Home Cleaners, we offer:\n• Sofa and couch cleaning\n• Mattress deep cleaning\n• Carpet and rug cleaning\n• General house cleaning\n• Post-event and post-construction cleaning\n\nWe serve both homes and offices across Nairobi and surrounding areas."
  },
  {
    id: 2,
    question: "How much do your services cost?",
    answer: "Prices vary depending on the size and service type. For example:\n• 4-seater sofa – From KSh 2,500\n• 5x6 Mattress – From KSh 1,800\n• General house cleaning – Starts at KSh 4,000\n\nContact us for a personalized quote via WhatsApp: +254 728 919 031."
  },
  {
    id: 3,
    question: "Do you bring your own equipment?",
    answer: "Yes, we come fully equipped with eco-friendly cleaning agents, vacuum machines, and steam cleaners. You don't need to provide anything."
  },
  {
    id: 4,
    question: "How long does a cleaning session take?",
    answer: "• Sofa/mattress cleaning: 1–2 hours\n• General house cleaning: 2–5 hours (depending on house size)\n\nWe always give you a time estimate before we begin."
  },
  {
    id: 5,
    question: "How often should I clean my sofa or mattress?",
    answer: "We recommend:\n• Sofas: Every 3–6 months\n• Mattresses: At least twice a year\n\nRegular cleaning helps remove dust, bacteria, and allergens."
  },
  {
    id: 6,
    question: "What areas do you serve?",
    answer: "We serve clients in Nairobi and its environs, including:\n• Westlands\n• Kileleshwa\n• Karen\n• Runda\n• South B\n• Kiambu\n\nIf you're outside Nairobi, contact us to check availability."
  },
  {
    id: 7,
    question: "Is the cleaning safe for kids and pets?",
    answer: "Yes. We use non-toxic, child-safe, and pet-safe cleaning solutions. If your household has allergies or sensitivities, let us know in advance."
  },
  {
    id: 8,
    question: "Are your cleaners trained and trustworthy?",
    answer: "Absolutely. Our staff are:\n• Professionally trained\n• Background-checked\n• Supervised on every job\n\nIntegrity is the foundation of our service."
  },
  {
    id: 9,
    question: "How soon can I book a cleaning?",
    answer: "We offer same-day or next-day appointments in most cases.\nBook easily on WhatsApp or through our website: edesacleaners.co.ke"
  },
  {
    id: 10,
    question: "Why should I choose Edesa Home Cleaners?",
    answer: "• Reliable and professional team\n• Eco-conscious cleaning methods\n• Affordable and transparent pricing\n• Excellent customer support\n• \"We Don't Just Clean — We Elevate\""
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const formatAnswer = (answer: string) => {
    return answer.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < answer.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Edesa Home Cleaners | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Edesa Home Cleaners' services, pricing, booking, and more. Get all the information you need about our professional cleaning services in Nairobi." />
        <meta name="keywords" content="FAQ, cleaning services, Nairobi, pricing, booking, sofa cleaning, mattress cleaning, house cleaning" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-green-100" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Get answers to the most common questions about our cleaning services, pricing, and booking process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {formatAnswer(faq.answer)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help! Contact us directly for personalized answers and booking assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254728919031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+254728919031"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-lg font-medium shadow-lg"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Us Now
            </a>
          </div>
          <p className="mt-6 text-gray-600">
            Available 24/7 for your convenience
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
