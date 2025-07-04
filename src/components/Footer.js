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
      <hr className=" border-1 border-gray-800 ml-16 mr-16" />
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "2.5rem 1rem 0 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2rem",
            fontWeight: 100,
            marginBottom: "1.5rem",
            color: "#444",
          }}
        >
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h2>
        <div style={{ marginBottom: "1.2rem" }}>
          <a
            className="font-libre-franklin"
            href="mailto:jennifer@drjenniferhahm.com"
            style={{
              color: "#222",
              textDecoration: "underline",
              fontSize: "1rem",
            }}
          >
            serena@blakepsychology.com
          </a>
        </div>
        <div style={{ marginBottom: "1.2rem", fontSize: "1rem" }}>
          Phone:{" "}
          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "#222",
              fontFamily: "Montserrat, sans-serif",
              fontStyle: "normal",
              fontWeight: 100,
            }}
          >
            (323) 555-0192
          </a>{" "}
          Fax: (248) 939-8190
        </div>
        <div
          className="font-libre-franklin"
          style={{
            marginBottom: "1.2rem",
            fontSize: "1rem",
          }}
        >
          28175 Haggerty Rd, Novi, MI 48377
        </div>
        <div
          className="font-libre-franklin"
          style={{ marginBottom: "2.5rem", fontSize: "0.9rem" }}
        >
          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "#222",
              marginRight: 12,
            }}
          >
            Home
          </a>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "#222",
              marginRight: 12,
            }}
          >
            Privacy Policy
          </a>
          <a href="#" style={{ textDecoration: "underline", color: "#222" }}>
            Good Faith Estimate
          </a>
        </div>
        <div style={{ margin: "3.5rem 0 2.5rem 0" }}>
          <a
            className="font-libre-franklin text-teal-500"
            href="#"
            style={{
              textDecoration: "underline",
              color: "#222",
              fontSize: "1rem",
            }}
          >
            Client Portal
          </a>
        </div>
        <div
          className="font-libre-franklin"
          style={{ fontSize: "0.9rem", color: "#444", marginTop: "3rem" }}
        >
          &copy; 2025 Dr. Serena Blake, PsyD , PLLC. All rights reserved.
        </div>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
