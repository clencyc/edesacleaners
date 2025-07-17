import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Info, Eye, Target, Award, Users, Lightbulb, HeartHandshake, Home } from 'lucide-react';

const coreValues = [
  { icon: <HeartHandshake className="w-6 h-6 text-green-600 mr-2" />, label: 'Integrity' },
  { icon: <Award className="w-6 h-6 text-green-600 mr-2" />, label: 'Excellence' },
  { icon: <Users className="w-6 h-6 text-green-600 mr-2" />, label: 'Customer-Centeredness' },
  { icon: <Lightbulb className="w-6 h-6 text-green-600 mr-2" />, label: 'Innovation' },
  { icon: <Home className="w-6 h-6 text-green-600 mr-2" />, label: 'Cleanliness = Dignity' },
];

const About = () => (
  <>
    <Helmet>
      <title>About | Edesa Home Cleaners</title>
      <meta name="description" content="Executive summary, vision, mission, and core values of Edesa Home Cleaners: a tech-enabled, premium cleaning company in Nairobi, serving residential and commercial clients with integrity and a vision to scale across Kenya." />
      <link rel="canonical" href="https://edesahomecleaners.com/about" />
    </Helmet>
    <section className="max-w-5xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
        <div className="flex-1 bg-green-50 rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4 text-green-700 flex items-center"><Info className="w-8 h-8 mr-3 text-green-600" /> About Us</h1>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Edesa Home Cleaners</strong> is a tech-enabled cleaning company in Nairobi offering premium couch, mattress, and house cleaning. We target both residential and commercial clients. Our core value is integrity, and we aim to scale across Kenya.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="About Edesa Home Cleaners" className="rounded-2xl shadow-lg w-full max-w-xs object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center"><Eye className="w-6 h-6 mr-2 text-green-600" /> Vision</h2>
          <p className="text-lg text-gray-700">To become the leading, trusted, and tech-smart cleaning brand in East Africa.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center"><Target className="w-6 h-6 mr-2 text-green-600" /> Mission</h2>
          <p className="text-lg text-gray-700">To deliver exceptional cleaning services that uplift lives, homes, and workspaces with professionalism, technology, and heart.</p>
        </div>
      </div>
      <div className="bg-green-50 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Our Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-800">
          {coreValues.map((val) => (
            <li key={val.label} className="flex items-center bg-white rounded-xl p-4 shadow">
              {val.icon}
              {val.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default About; 