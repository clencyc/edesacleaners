import React from 'react';
import { Helmet } from 'react-helmet-async';

const Owner = () => (
  <>
    <Helmet>
      <title>Owner | Edesa Home Cleaners</title>
      <meta name="description" content="Meet Joan Edesa: visionary founder with experience in teaching, marketing, and tech. Passionate about creating clean, dignified spaces with heart and innovation." />
      <link rel="canonical" href="https://edesahomecleaners.com/owner" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Owner: Joan Edesa</h1>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Joan Edesa</strong> is a visionary with experience in teaching, marketing, and tech. She is passionate about creating clean, dignified spaces with heart and innovation. As the founder of Edesa Home Cleaners, Joan leads with integrity and a commitment to uplifting lives, homes, and workspaces across Kenya.
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Experienced in teaching, marketing, and technology</li>
        <li>Passionate about clean, dignified spaces</li>
        <li>Leads with heart, innovation, and integrity</li>
      </ul>
    </section>
  </>
);

export default Owner; 