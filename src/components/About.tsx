import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: '5,000+',
      label: 'Happy Customers',
      color: 'text-primary-600'
    },
    {
      icon: Award,
      value: '10+',
      label: 'Years Experience',
      color: 'text-primary-500'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      color: 'text-primary-700'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Satisfaction Guarantee',
      color: 'text-accent-light'
    }
  ];

  const features = [
    {
      title: 'Professional Team',
      description: 'Our trained and experienced cleaning professionals ensure quality service every time.',
      icon: Users
    },
    {
      title: 'Eco-Friendly Products',
      description: 'We use environmentally safe cleaning products that are safe for your family and pets.',
      icon: Shield
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book cleaning services at your convenience with flexible scheduling options.',
      icon: Clock
    },
    {
      title: 'Quality Assurance',
      description: 'We guarantee satisfaction with our quality assurance program and follow-up services.',
      icon: Award
    }
  ];

  return (
    <section id="about" className="bg-[#3a1313] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading and Text */}
          <div>
            <div className="mb-8">
              <div className="text-white text-sm mb-2">/ About Edesa</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">Trusted—<br />Since 2018</h2>
              <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                Edesa Home Cleaners was founded in 2018 with a mission to provide Nairobi and the surrounding area with quality cleaning services at fair prices. We specialize in residential and commercial cleaning, including deep cleaning, steam cleaning, post-construction, and after-event services. Our team is professional, background-checked, and dedicated to your satisfaction.
              </p>
              <p className="text-gray-200 mb-6">
                Need a quote or have questions? <a href="/contact" className="text-yellow-300 underline hover:text-yellow-400">Contact us</a> — where cleanliness meets care!
              </p>
            </div>
          </div>
          {/* Right: Stacked Images */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white/10">
              <img
                src="/images/person1.jpeg"
                alt="Edesa Home Cleaners Team"
                className="w-full h-48 object-cover object-center"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white/10">
              <img
                src="/images/carpet.jpg"
                alt="Carpet cleaning"
                className="w-full h-48 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;