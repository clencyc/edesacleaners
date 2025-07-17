import React from 'react';
import { Helmet } from 'react-helmet-async';

const CoreValues = () => (
  <>
    <Helmet>
      <title>Core Values | Edesa Home Cleaners</title>
      <meta name="description" content="Our core values: Integrity, Excellence, Customer-Centeredness, Innovation, Cleanliness = Dignity." />
      <link rel="canonical" href="https://edesahomecleaners.com/core-values" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Our Core Values</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li><strong>Integrity</strong></li>
        <li><strong>Excellence</strong></li>
        <li><strong>Customer-Centeredness</strong></li>
        <li><strong>Innovation</strong></li>
        <li><strong>Cleanliness = Dignity</strong></li>
      </ul>
    </section>
  </>
);

export default CoreValues; 