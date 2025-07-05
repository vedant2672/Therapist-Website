import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#f7f4ea",
        color: "#444",
        fontFamily: "Libre Franklin, sans-serif",
        padding: "0 0 0 0",
      }}
    >
      <hr className="border-1 border-gray-800 mx-4 sm:mx-8 lg:mx-16" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
        <h2
          className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-gray-700"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 100,
          }}
        >
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h2>
        <div className="mb-4 sm:mb-6">
          <a
            className="font-libre-franklin text-gray-800 underline text-sm sm:text-base"
            href="mailto:serena@blakepsychology.com"
          >
            serena@blakepsychology.com
          </a>
        </div>
        <div className="mb-4 sm:mb-6 text-sm sm:text-base">
          Phone:{" "}
          <a
            href="tel:+13235550192"
            className="underline text-gray-800 font-libre-franklin"
          >
            (323) 555-0192
          </a>{" "}
          <span className="block sm:inline">Fax: (248) 939-8190</span>
        </div>
        <div className="font-libre-franklin mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          28175 Haggerty Rd, Novi, MI 48377
        </div>
        <div className="font-libre-franklin mb-8 sm:mb-10 text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="#" className="underline text-gray-800">
            Home
          </a>
          <a href="#" className="underline text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="underline text-gray-800">
            Good Faith Estimate
          </a>
        </div>
        <div className="my-8 sm:my-12">
          <a
            className="font-libre-franklin text-teal-500 underline text-sm sm:text-base"
            href="#"
          >
            Client Portal
          </a>
        </div>
        <div className="font-libre-franklin text-xs sm:text-sm text-gray-600 mt-8">
          &copy; 2025 Dr. Serena Blake, PsyD , PLLC. All rights reserved.
        </div>
      </div>
      <br className="block sm:hidden" />
    </footer>
  );
};

export default Footer;
