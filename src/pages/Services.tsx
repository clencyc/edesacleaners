import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sofa, BedDouble, Layers, Home, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Couch Cleaning',
    description: 'Deep cleaning and stain removal for all types of couches and sofas. Restore freshness and comfort to your living space.',
    image: '/images/couchclean.jpg',
    icon: <Sofa className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/couch-cleaning',
  },
  {
    title: 'Mattress Cleaning',
    description: 'Professional mattress cleaning to remove dust mites, allergens, and stains for a healthier sleep.',
    image: '/images/matress.jpg',
    icon: <BedDouble className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/mattress-cleaning',
  },
  {
    title: 'Carpet & Rug Cleaning',
    description: 'Expert cleaning for carpets and rugs, removing dirt, odors, and tough stains. Safe for all fabrics.',
    image: '/images/carpet.jpg',
    icon: <Layers className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/carpet-cleaning',
  },
  {
    title: 'House Deep Cleaning',
    description: 'Comprehensive deep cleaning for your entire home, including kitchens, bathrooms, and living areas.',
    image: '/images/house deep.jpg',
    icon: <Home className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/house-cleaning',
  },
  {
    title: 'Office Cleaning',
    description: 'Reliable and thorough cleaning for offices and commercial spaces. Create a healthy, productive work environment.',
    image: '/images/officecleaqn.jpg',
    icon: <Building2 className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/office-cleaning',
  },
  {
    title: 'Steam Cleaning',
    description: 'Powerful steam cleaning for deep sanitization of surfaces, upholstery, and floors. Ideal for allergy-sensitive environments.',
    image: '/images/steamclean.jpg',
    icon: <Layers className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/steam-cleaning',
  },
  {
    title: 'Post-Construction Cleaning',
    description: 'Thorough cleaning after construction or renovation to remove dust, debris, and residues. Move in to a spotless space.',
    image: '/images/postconstcleaning.jpg',
    icon: <Building2 className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/post-construction-cleaning',
  },
  {
    title: 'After Event Cleaning',
    description: 'Comprehensive cleaning services for venues and homes after events, working closely with event planners for a seamless experience.',
    image: '/images/afterevent.jpg',
    icon: <Home className="w-8 h-8 text-green-600 mb-2" />,
    link: '/services/event-cleaning',
  },
];

const Services = () => (
  <>
    <Helmet>
      <title>Services | Edesa Home Cleaners</title>
      <meta name="description" content="Explore our premium cleaning services: couch, mattress, carpet & rug, house deep cleaning, and office cleaning. Serving Nairobi and beyond." />
      <link rel="canonical" href="https://edesahomecleaners.com/services" />
    </Helmet>
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-green-700 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div key={service.title} className="bg-green-50 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-[1.025] transition-transform">
            <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
            <div className="p-8 flex-1 flex flex-col items-center text-center bg-white rounded-b-2xl">
              {service.icon}
              <h2 className="text-2xl font-bold text-green-700 mb-2">{service.title}</h2>
              <p className="text-gray-700 mb-6 flex-1">{service.description}</p>
              <div className="flex flex-col gap-3 w-full">
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors border border-green-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href={`https://wa.me/254728919031?text=Hi!%20I%20would%20like%20to%20order%20the%20${service.title.toLowerCase().replace(/ /g, '%20')}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition-colors text-center"
                >
                  Order this Service
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Services; 