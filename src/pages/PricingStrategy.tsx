import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingStrategy = () => (
  <>
    <Helmet>
      <title>Pricing Strategy | Edesa Home Cleaners</title>
      <meta name="description" content="Affordable, value-based, and transparent cleaning packages. Example: Couch cleaning @ KSh 1,500–2,500." />
      <link rel="canonical" href="https://edesahomecleaners.com/pricing-strategy" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Pricing Strategy</h1>
      <p className="text-lg text-gray-700 mb-4">Affordable but value-based. Transparent packages for every service.</p>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li>Couch cleaning: <span className="font-semibold">KSh 1,500–2,500</span></li>
        <li>Mattress cleaning: <span className="font-semibold">KSh 1,500–2,500</span></li>
        <li>Carpet & rug cleaning: <span className="font-semibold">KSh 1,500–2,500</span></li>
        <li>House deep cleaning: <span className="font-semibold">Custom quote</span></li>
        <li>Office cleaning: <span className="font-semibold">Custom quote</span></li>
      </ul>
    </section>
  </>
);

export default PricingStrategy; 