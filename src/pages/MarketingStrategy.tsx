import React from 'react';
import { Helmet } from 'react-helmet-async';

const MarketingStrategy = () => (
  <>
    <Helmet>
      <title>Marketing Strategy | Edesa Home Cleaners</title>
      <meta name="description" content="Our marketing strategy: WhatsApp marketing, Instagram & TikTok reels, Google Business Profile, SEO website, and partnerships with landlords & agents." />
      <link rel="canonical" href="https://edesahomecleaners.com/marketing-strategy" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Marketing Strategy</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
        <li>WhatsApp Marketing (automated messages, posters, status updates)</li>
        <li>Instagram & TikTok (before/after reels)</li>
        <li>Google Business Profile + SEO website</li>
        <li>Partnerships with landlords & agents</li>
      </ul>
    </section>
  </>
);

export default MarketingStrategy; 