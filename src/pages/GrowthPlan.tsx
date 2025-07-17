import React from 'react';
import { Helmet } from 'react-helmet-async';

const GrowthPlan = () => (
  <>
    <Helmet>
      <title>Growth Plan | Edesa Home Cleaners</title>
      <meta name="description" content="Growth plan: hire & train staff, expand to other towns, launch mobile app, eco-friendly product line (long term)." />
      <link rel="canonical" href="https://edesahomecleaners.com/growth-plan" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Growth Plan</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li>Hire & train staff</li>
        <li>Expand to other towns</li>
        <li>Launch mobile app</li>
        <li>Eco-friendly product line (long term)</li>
      </ul>
    </section>
  </>
);

export default GrowthPlan; 