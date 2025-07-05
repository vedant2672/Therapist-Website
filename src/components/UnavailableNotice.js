import React from "react";

const UnavailableNotice = () => (
  <div className="w-full bg-[#f3f0e8] py-12 sm:py-24 flex items-center justify-center px-4">
    <span
      className="text-lg sm:text-xl md:text-2xl font-playfair text-stone-700 text-center"
      style={{ fontWeight: 500 }}
    >
      Unable to accept new clients at this time.
    </span>
  </div>
);

export default UnavailableNotice;
