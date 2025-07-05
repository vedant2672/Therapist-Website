import React from "react";

const QuoteBanner = () => (
  <div
    className="w-full flex items-center justify-center px-4"
    style={{ minHeight: "300px", padding: 0 }}
  >
    <div
      className="relative w-full flex items-center justify-center"
      style={{
        height: "300px",
        backgroundImage: "url('/sky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "250px",
      }}
    >
      <div
        className="w-full text-center relative z-10 px-4 sm:px-8"
        style={{
          color: "#222",
        }}
      >
        <span
          className="block mb-4 sm:mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#222",
            fontWeight: 400,
          }}
        >
          &ldquo;I have come to believe that caring for myself is not self-indulgent.
          <br className="hidden sm:block" />
          <span className="block sm:inline">
            {" "}
            Caring for myself is an act of survival.&rdquo;
          </span>
        </span>
        <span
          className="block mt-4 sm:mt-8 text-base sm:text-lg md:text-xl"
          style={{
            fontFamily: "Libre Franklin, sans-serif",
            color: "#555",
            fontWeight: 100,
          }}
        >
          — Audre Lorde
        </span>
      </div>
      <div className="absolute inset-0 bg-white/0 z-0" />
    </div>
  </div>
);

export default QuoteBanner;
