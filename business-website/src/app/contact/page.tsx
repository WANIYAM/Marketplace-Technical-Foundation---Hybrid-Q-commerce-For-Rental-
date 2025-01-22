"use client"

import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Contact: React.FC = () => {
  const [isPopupVisible] = useState(false);

 
  return (
    <><Navbar />
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          style={{
            filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1737470484722!5m2!1sen!2s"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600 justify-center">
            We would love to hear from you! Whether you have questions, feedback, or want to collaborate, feel free to reach out.

          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Get in touch
          </button>
          {isPopupVisible && (
            <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
              <p className="font-bold">Success!</p>
              <p>Your feedback has been sent.</p>
            </div>
          )}

        </div>
      </div>
    </section></>
  );
};

export default Contact;
