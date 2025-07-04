import React from "react";

const QuoteBanner = () => (
  <div
    className="w-full  flex items-center justify-center"
    style={{ minHeight: "400px", padding: 0 }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: "url('/sky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "#222",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "1.75rem",
            color: "#222",
            fontWeight: 400,
            display: "block",
            marginBottom: "2rem",
          }}
        >
          “I have come to believe that caring for myself is not self-indulgent.
          <br />
          Caring for myself is an act of survival.”
        </span>
        <span
          style={{
            fontFamily: "Libre Franklin, sans-serif",
            fontSize: "1.2rem",
            color: "#555",
            fontWeight: 100,
            display: "block",
            marginTop: "2rem",
          }}
        >
          — Audre Lorde
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.0)",
          zIndex: 1,
        }}
      />
    </div>
  </div>
);

export default QuoteBanner;
