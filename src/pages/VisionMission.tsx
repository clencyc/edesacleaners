import React from 'react';
import { Helmet } from 'react-helmet-async';

const VisionMission = () => (
  <>
    <Helmet>
      <title>Vision & Mission | Edesa Home Cleaners</title>
      <meta name="description" content="Our vision: To become the leading, trusted, and tech-smart cleaning brand in East Africa. Our mission: To deliver exceptional cleaning services that uplift lives, homes, and workspaces with professionalism, technology, and heart." />
      <link rel="canonical" href="https://edesahomecleaners.com/vision-mission" />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary-600">Vision & Mission</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Vision</h2>
        <p className="text-lg text-gray-700">To become the leading, trusted, and tech-smart cleaning brand in East Africa.</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Mission</h2>
        <p className="text-lg text-gray-700">To deliver exceptional cleaning services that uplift lives, homes, and workspaces with professionalism, technology, and heart.</p>
      </div>
    </section>
  </>
);

export default VisionMission; 