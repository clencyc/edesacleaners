import React from 'react';
import { Helmet } from 'react-helmet-async';

const FinancialProjections = () => (
  <>
    <Helmet>
      <title>Financial Projections | Edesa Home Cleaners</title>
      <meta name="description" content="First 6 months: Break-even target KSh 50,000/month, focus on equipment, transport, marketing, and goal of 3–5 daily bookings." />
      <link rel="canonical" href="https://edesahomecleaners.com/financial-projections" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Financial Projections</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li>Break-even target: <span className="font-semibold">KSh 50,000/month in revenue</span></li>
        <li>Cost focus: Equipment, transport, marketing</li>
        <li>Goal: 3–5 daily bookings consistently</li>
      </ul>
    </section>
  </>
);

export default FinancialProjections; 