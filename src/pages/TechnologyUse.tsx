import React from 'react';
import { Helmet } from 'react-helmet-async';

const TechnologyUse = () => (
  <>
    <Helmet>
      <title>Technology Use | Edesa Home Cleaners</title>
      <meta name="description" content="We use technology for booking via WhatsApp & website, mobile payments, and CRM for client follow-ups." />
      <link rel="canonical" href="https://edesahomecleaners.com/technology-use" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Technology Use</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li>Booking via WhatsApp & website</li>
        <li>Mobile payments</li>
        <li>CRM for client follow-ups</li>
      </ul>
    </section>
  </>
);

export default TechnologyUse; 