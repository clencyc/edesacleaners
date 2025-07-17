import React from 'react';
import { Home, Building, Sparkles, Car, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      features: ['Deep cleaning', 'Regular maintenance', 'Move-in/out cleaning', 'Post-construction cleanup'],
      price: 'From $80',
      popular: false
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning services for businesses of all sizes.',
      features: ['Office buildings', 'Retail spaces', 'Medical facilities', 'Educational institutions'],
      price: 'From $120',
      popular: true
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that covers every corner of your space with attention to detail.',
      features: ['Appliance cleaning', 'Baseboards & trim', 'Inside cabinets', 'Light fixtures'],
      price: 'From $150',
      popular: false
    },
    {
      icon: Car,
      title: 'Specialized Services',
      description: 'Specialized cleaning for unique requirements and hard-to-clean areas.',
      features: ['Carpet cleaning', 'Window cleaning', 'Upholstery cleaning', 'Power washing'],
      price: 'From $100',
      popular: false
    }
  ];

  const openWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in your ${serviceName} service. Can you provide more details and pricing?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive cleaning solutions tailored to your specific needs. 
            Choose from our range of professional services designed to keep your space spotless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-primary-500 relative' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-primary-600 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => openWhatsApp(service.title)}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 mb-6">
              Every space is unique. Contact us for a personalized cleaning plan that fits your specific needs and budget.
            </p>
            <button
              onClick={() => openWhatsApp('Custom Cleaning Service')}
              className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center mx-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;