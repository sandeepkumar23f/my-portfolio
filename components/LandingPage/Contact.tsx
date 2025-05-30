"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    emailjs
      .sendForm(
        "service_9193pf1",     // EmailJS service ID
        "template_e39ik78",    //  EmailJS template ID
        e.currentTarget,       // Use e.currentTarget for correct type
        "AON4qUhZJLU_wnXag"         // EmailJS public key
      )
      .then(
        () => {
          setIsLoading(false);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setIsLoading(false);
          setErrorMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="w-full min-h-screen py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-500 mb-10">Contact Me</h2>

        {successMessage && <div className="text-green-600 text-center mb-6">{successMessage}</div>}
        {errorMessage && <div className="text-red-600 text-center mb-6">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl shadow-md">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-black bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
