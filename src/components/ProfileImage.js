import Image from "next/image";

const ProfileImage = ({ src, alt, className, fallback = true }) => {
  if (!src && fallback) {
    return (
      <div
        className={`bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center ${className}`}
      >
        <span className="text-blue-800 font-semibold text-2xl">SB</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => {
        // Handle image load error
        console.log("Image failed to load");
      }}
    />
  );
};

export default ProfileImage;
