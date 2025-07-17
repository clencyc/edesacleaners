import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to get more information about your cleaning services.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(123) 456-7890',
      action: () => window.open('tel:+1234567890')
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@cleanpro.com',
      action: () => window.open('mailto:info@cleanpro.com')
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Clean Street, City, State 12345',
      action: () => window.open('https://maps.google.com/?q=123+Clean+Street+City+State+12345')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Quick Response',
      action: openWhatsApp
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 5:00 PM' }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience professional cleaning services? Contact us today for a free quote 
            or to schedule your cleaning appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    onClick={info.action}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg mr-4 group-hover:bg-primary-200 transition-colors">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-primary-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Order
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Get instant quotes and book your cleaning service directly through WhatsApp.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Order via WhatsApp
              </button>
            </div>

            <div className="bg-primary-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Emergency Cleaning
              </h3>
              <p className="text-primary-100 mb-4 text-sm">
                Need immediate cleaning service? We offer same-day emergency cleaning for urgent situations.
              </p>
              <button
                onClick={() => window.open('tel:+1234567890')}
                className="w-full bg-white text-primary-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Areas
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Downtown Area
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Suburbs
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Business District
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Residential Areas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;