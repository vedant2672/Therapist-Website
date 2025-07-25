const Hero = () => {
  return (
    <div className="bg-bg-cream">
      <header className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img
                src="image.png"
                alt="Dr. Serena Blake Logo"
                className="w-12 h-12 sm:w-15 sm:h-15 object-cover rounded-sm"
              />

              <div>
                <h1 className="text-lg sm:text-xl font-medium leading-none text-green-800 font-playfair">
                  Dr. Serena Blake
                </h1>
                <p className="text-lg sm:text-xl font-light leading-none text-green-800 font-playfair">
                  Psychological Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-8"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#4a90a4;stop-opacity:1" />
                  <stop offset="25%" style="stop-color:#7db3c7;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#a8d0dc;stop-opacity:1" />
                  <stop offset="75%" style="stop-color:#c2dde6;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#d6e8ed;stop-opacity:1" />
                </linearGradient>
                <filter id="wave">
                  <feTurbulence baseFrequency="0.02" numOctaves="3"/>
                  <feDisplacementMap in="SourceGraphic" scale="30"/>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#oceanGrad)"/>
              <path d="M0,400 Q300,350 600,380 T1200,360 L1200,800 L0,800 Z" fill="rgba(255,255,255,0.1)" filter="url(#wave)"/>
              <path d="M0,450 Q300,420 600,440 T1200,430 L1200,800 L0,800 Z" fill="rgba(255,255,255,0.15)"/>
              <path d="M0,500 Q300,480 600,500 T1200,490 L1200,800 L0,800 Z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          `)}`,
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white font-lora leading-tight mb-6 sm:mb-8">
            Psychological Care for Change, Insight, and Well-Being
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto font-lora">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and <span className="underline">most U.S.</span> states
            through PSYPACT participation
          </p>

          {/* CTA Button */}
          <div className="mb-8 sm:mb-16 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-teal-500/90 text-white font-light font-inter text-sm sm:text-base tracking-wider rounded-full w-full max-w-xs sm:max-w-sm md:w-[380px] h-16 sm:h-20 md:h-[120px] transition-all duration-300 hover:opacity-90 px-4"
              style={{ borderRadius: "50%" }}
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </div>
      </section>
      <br></br>
    </div>
  );
};

export default Hero;
