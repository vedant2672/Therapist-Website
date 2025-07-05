"use client";

import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, but a superbill is provided for self-submission. I provide a superbill with the necessary information and codes so you can file for out-of-network benefits with your insurance company. Many clients find they can receive partial reimbursement this way.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes—all virtual sessions via Zoom. I offer therapy exclusively through secure telehealth sessions using a HIPAA-compliant video platform. This allows for greater flexibility and accessibility while maintaining the same quality of care as in-person sessions.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "24-hour notice required. I require 24-hour notice for any cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.",
    },
    {
      question: "Do you treat children or adolescents?",
      answer:
        "My practice focuses on adult individual and couples therapy. I work with clients 18 years and older. If you're seeking services for an adolescent or child, I'd be happy to provide referrals to qualified colleagues who specialize in younger populations.",
    },
    {
      question: "Which geographic regions do you serve?",
      answer:
        "I provide therapy services throughout California via secure telehealth. I am licensed in California and can see clients who are physically located within the state during our sessions.",
    },
    {
      question:
        "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
      answer:
        "CBT-I is a structured, evidence-based treatment typically consisting of 6-8 sessions. It includes sleep restriction, stimulus control, sleep hygiene education, cognitive restructuring, and relaxation techniques. The treatment is tailored to your specific sleep patterns and challenges.",
    },
    {
      question: "What are your hours?",
      answer:
        "I offer sessions Monday through Friday, with some evening hours available. During our initial consultation, we'll work together to find times that work best for your schedule.",
    },
    {
      question: "Do you take insurance?",
      answer:
        "I do not accept insurance directly. However, I provide a superbill with the necessary information and codes so you can file for out-of-network benefits with your insurance company. Many clients find they can receive partial reimbursement this way.",
    },
    {
      question: "What is the cost of therapy?",
      answer:
        "Session fees are discussed during our initial consultation. I believe therapy should be accessible and offer a limited number of sliding scale spots for those who qualify. Payment is expected at the time of service.",
    },
    {
      question: "What are the benefits of private pay therapy?",
      answer:
        "Private pay therapy offers greater privacy (no insurance records), more flexibility in treatment approach and duration, no limitations on number of sessions, and the ability to focus purely on your therapeutic goals without insurance company requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-[#f7f4ea]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10"
          style={{ color: "#20513a", fontFamily: "Playfair Display, serif" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span
                  className="font-semibold text-base sm:text-lg pr-4"
                  style={{
                    color: "#20513a",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {faq.question}
                </span>
                <span className="ml-4">
                  {openFAQ === index ? (
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#20513a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#20513a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  )}
                </span>
              </button>
              {openFAQ === index && (
                <div
                  className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base"
                  style={{ fontFamily: "Libre Franklin, sans-serif" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-12 sm:mt-20 border-1 border-gray-800 mx-4 sm:mx-8 lg:mx-16" />
    </section>
  );
};

export default FAQ;
