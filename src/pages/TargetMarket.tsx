import React from 'react';
import { Helmet } from 'react-helmet-async';

const TargetMarket = () => (
  <>
    <Helmet>
      <title>Target Market | Edesa Home Cleaners</title>
      <meta name="description" content="Our target market: busy working families, real estate companies, Airbnb hosts, offices in Nairobi, schools, and daycare centers." />
      <link rel="canonical" href="https://edesahomecleaners.com/target-market" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Target Market</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li>Busy working families</li>
        <li>Real estate companies</li>
        <li>Airbnb hosts</li>
        <li>Offices in Nairobi</li>
        <li>Schools & daycare centers</li>
      </ul>
    </section>
  </>
);

export default TargetMarket; 