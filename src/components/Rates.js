import React from "react";

const Rates = () => {
  return (
    <section className="py-12 sm:py-24 bg-[#97b6b8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-playfair mb-8 sm:mb-16 text-stone-900"
          style={{ fontWeight: 300 }}
        >
          Rates and Insurance
        </h2>
        <div className="mb-6 sm:mb-10">
          <p className="text-sm sm:text-base font-libre-franklin text-stone-900 mb-4 sm:mb-8">
            Session Fee - $200
          </p>
          <p className="text-sm sm:text-base font-libre-franklin text-stone-900 mb-4 sm:mb-8">
            Psychodiagnostic Evaluation - $225
          </p>
        </div>
        <p
          className="text-sm sm:text-base font-libre-franklin text-stone-900 mb-4 sm:mb-8 px-4"
          style={{ fontWeight: 300 }}
        >
          I accept both private pay and insurance. I am in-network with BCBS and
          Aetna.
        </p>
        <p
          className="text-sm sm:text-base font-libre-franklin text-stone-900 px-4"
          style={{ fontWeight: 300 }}
        >
          For out-of-network plans, I've partnered with Mentaya using{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-stone-900 hover:text-stone-700"
            style={{ fontWeight: 300 }}
          >
            this tool
          </a>{" "}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
};

export default Rates;
