import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Sofa, BedDouble, Layers, Home as HomeIcon, Building2, Quote } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const services = [
  {
    title: 'Couch Cleaning',
    description: 'Deep cleaning and stain removal for all types of couches and sofas.',
    image: '/images/couchclean.jpg',
    icon: <Sofa className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'Mattress Cleaning',
    description: 'Professional mattress cleaning to remove dust mites, allergens, and stains.',
    image: '/images/matress.jpg',
    icon: <BedDouble className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'Carpet & Rug Cleaning',
    description: 'Expert cleaning for carpets and rugs, removing dirt, odors, and tough stains.',
    image: '/images/carpet.jpg',
    icon: <Layers className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'House Deep Cleaning',
    description: 'Comprehensive deep cleaning for your entire home, including kitchens, bathrooms, and living areas.',
    image: '/images/house deep.jpg',
    icon: <HomeIcon className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'Office Cleaning',
    description: 'Reliable and thorough cleaning for offices and commercial spaces.',
    image: '/images/officecleaqn.jpg',
    icon: <Building2 className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'Steam Cleaning',
    description: 'Powerful steam cleaning for deep sanitization of surfaces, upholstery, and floors.',
    image: '/images/steamclean.jpg',
    icon: <Layers className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'Post-Construction Cleaning',
    description: 'Thorough cleaning after construction or renovation to remove dust, debris, and residues.',
    image: '/images/postconstcleaning.jpg',
    icon: <Building2 className="w-8 h-8 text-green-600 mb-2" />,
  },
  {
    title: 'After Event Cleaning',
    description: 'Comprehensive cleaning services for venues and homes after events, working closely with event planners.',
    image: '/images/afterevent.jpg',
    icon: <HomeIcon className="w-8 h-8 text-green-600 mb-2" />,
  },
];

const testimonials = [
  {
    name: 'Aisha N.',
    text: 'Edesa Home Cleaners exceeded my expectations! The team was courteous and my home has never been cleaner. I highly recommend their services.',
    image: '/images/person1.jpeg',
  },
  {
    name: 'Kwame B.',
    text: 'Professional, punctual, and thorough. My office space feels brand new. Thank you, Edesa Home Cleaners!',
    image: '/images/person2.jpeg',
  },
  {
    name: 'Zuri M.',
    text: 'I appreciate the eco-friendly products and the attention to detail. Edesa is my trusted cleaning partner in Nairobi!',
    image: '/images/person3.jpeg',
  },
  {
    name: 'Jabari O.',
    text: 'Booking was simple and the results were fantastic. The team was friendly and efficient. Will use again!',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
];

const Home = () => {
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendFeedback = (e) => {
    e.preventDefault();
    setFeedbackStatus('');
    emailjs.sendForm(
      'service_3tkaasz',
      'template_23kxw5p',
      e.target,
      '2nqgcGbd7_eXysjFE' 
    )
      .then(
        (result) => {
          setFeedbackStatus('Thank you for your feedback!');
          e.target.reset();
        },
        (error) => {
          setFeedbackStatus('Sorry, there was an error. Please try again.');
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Edesa Home Cleaners - We Don’t Just Clean — We Elevate</title>
        <meta name="description" content="Edesa Home Cleaners is a tech-enabled cleaning company in Nairobi offering premium couch, mattress, and house cleaning for residential and commercial clients. Integrity-driven, scaling across Kenya." />
        <link rel="canonical" href="https://edesahomecleaners.com/" />
      </Helmet>
      <Hero />
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-green-700 text-center">Our Top Services</h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div key={service.title} className="bg-green-50 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-[1.025] transition-transform">
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-8 flex-1 flex flex-col items-center text-center bg-white rounded-b-2xl">
                {service.icon}
                <h3 className="text-xl font-bold text-green-700 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{service.description}</p>
                <Link
                  to={{ pathname: '/services', hash: '#services' }}
                  className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition-colors text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-green-700 text-center flex items-center justify-center"><Quote className="w-8 h-8 mr-3 text-green-600" /> What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-green-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white shadow" />
              <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
              <div className="font-bold text-green-700">{t.name}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Feedback Form Section */}
      <section className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Leave Us Your Feedback</h2>
        <form onSubmit={sendFeedback} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email "
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            rows={4}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition-colors"
          >
            Submit Feedback
          </button>
          {feedbackStatus && (
            <div className="text-center mt-4 text-green-700 font-semibold">{feedbackStatus}</div>
          )}
        </form>
      </section>
    </>
  );
};

export default Home; 