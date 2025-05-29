"use client";

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-white py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-500 mb-10">
          Contact Me
        </h2>

        <form className="space-y-6 bg-lime-100 p-8 rounded-2xl shadow-md">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-black bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
