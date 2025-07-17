import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Edesa Home Cleaners</title>
        <meta name="description" content="Contact Edesa Home Cleaners for premium cleaning services in Nairobi. Book via WhatsApp, phone, or our website." />
        <link rel="canonical" href="https://edesahomecleaners.com/contact" />
      </Helmet>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-green-700 text-center flex items-center justify-center"><Mail className="w-8 h-8 mr-3 text-green-600" /> Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-green-50 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center"><MessageCircle className="w-6 h-6 mr-2 text-green-600" /> Get in Touch</h2>
              <p className="text-gray-700 mb-4">We'd love to hear from you! Fill out the form or use the contact details below.</p>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Email:</span> <a href="mailto:joanedesa95@gmail.com" className="text-green-700 hover:underline">joanedesa95@gmail.com</a></li>
                <li><span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/254728919031" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">+254 728 919031</a></li>
                <li><span className="font-semibold">Location:</span> Nairobi & Surrounds</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center"><MapPin className="w-6 h-6 mr-2 text-green-600" /> Service Area</h2>
              <div className="rounded-lg overflow-hidden shadow">
                <iframe
                  title="Nairobi Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.738%2C-1.373%2C37.105%2C-1.092&layer=mapnik"
                  className="w-full h-56 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="text-xs text-gray-500 mt-2 text-center">We serve all of Nairobi and surrounding areas.</div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl shadow-xl p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Form</h2>
            {submitted ? (
              <div className="text-green-700 font-semibold text-lg text-center">Thank you for reaching out! We'll get back to you soon.</div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors shadow"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 