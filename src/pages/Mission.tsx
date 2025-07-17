import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Award, Users, Lightbulb, HeartHandshake, Home, Building } from 'lucide-react';

const coreValues = [
  { icon: <HeartHandshake className="w-6 h-6 text-green-600 mr-2" />, label: 'Integrity' },
  { icon: <Award className="w-6 h-6 text-green-600 mr-2" />, label: 'Excellence' },
  { icon: <Users className="w-6 h-6 text-green-600 mr-2" />, label: 'Customer-Centeredness' },
  { icon: <Lightbulb className="w-6 h-6 text-green-600 mr-2" />, label: 'Innovation' },
  { icon: <Home className="w-6 h-6 text-green-600 mr-2" />, label: 'Cleanliness = Dignity' },
];

const targetMarket = [
  { icon: <Users className="w-6 h-6 text-green-600 mr-2" />, label: 'Busy working families' },
  { icon: <Home className="w-6 h-6 text-green-600 mr-2" />, label: 'Real estate companies' },
  { icon: <Home className="w-6 h-6 text-green-600 mr-2" />, label: 'Airbnb hosts' },
  { icon: <Building className="w-6 h-6 text-green-600 mr-2" />, label: 'Offices in Nairobi' },
  { icon: <Users className="w-6 h-6 text-green-600 mr-2" />, label: 'Schools & daycare centers' },
];

const Mission = () => (
  <>
    <Helmet>
      <title>Mission | Edesa Home Cleaners</title>
      <meta name="description" content="Our vision, mission, core values, and target market. Discover what drives Edesa Home Cleaners to be the leading, trusted, and tech-smart cleaning brand in East Africa." />
      <link rel="canonical" href="https://edesahomecleaners.com/mission" />
    </Helmet>
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-green-700 text-center">Our Mission & More</h1>
      <div className="mb-12 bg-green-50 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-2 text-green-700">Vision</h2>
        <p className="text-lg text-gray-700 mb-4">To become the leading, trusted, and tech-smart cleaning brand in East Africa.</p>
        <h2 className="text-2xl font-bold mb-2 text-green-700">Mission</h2>
        <p className="text-lg text-gray-700 mb-4">To deliver exceptional cleaning services that uplift lives, homes, and workspaces with professionalism, technology, and heart.</p>
      </div>
      <div className="mb-12 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-800">
          {coreValues.map((val) => (
            <li key={val.label} className="flex items-center bg-green-50 rounded-xl p-4 shadow">
              {val.icon}
              {val.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-50 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Target Market</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-800">
          {targetMarket.map((tm) => (
            <li key={tm.label} className="flex items-center bg-white rounded-xl p-4 shadow">
              {tm.icon}
              {tm.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Mission; 