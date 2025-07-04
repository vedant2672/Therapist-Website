"use client";

const SimpleImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.style.display = "none";
        const fallback = e.target.nextElementSibling;
        if (fallback) fallback.style.display = "flex";
      }}
    />
  );
};

export default SimpleImage;
