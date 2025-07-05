import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <h2
                className="text-2xl sm:text-3xl lg:text-3xl font-semibold mb-8 sm:mb-12 leading-tight text-center lg:text-left px-4 sm:px-8 lg:pl-24"
                style={{
                  color: "#7E7E6B",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                About Dr. Serena Blake
              </h2>

              <div
                className="space-y-6 sm:space-y-8 leading-relaxed font-light px-4 sm:px-8 lg:px-16"
                style={{
                  color: "#7E7E6B",
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
                <p className="font-libre-franklin leading-loose text-base sm:text-lg">
                  Finding time and opportunities to care for ourselves can be
                  incredibly challenging in today&apos;s busy and demanding world. I
                  believe therapy offers a dedicated space for self-care,
                  providing the support and tools needed to improve this
                  essential practice. Therapy can help individuals identify and
                  clarify their goals, values, and the various elements that
                  contribute to their well-being, recognizing that these aspects
                  vary from person to person.
                </p>
                <p className="font-libre-franklin leading-loose text-base sm:text-lg">
                  I am dedicated to supporting this journey by offering active
                  listening, psychological knowledge, empathy, compassion, and
                  insights into behavioral patterns and tendencies. I hold a
                  master&apos;s degree in Clinical Psychology from the Michigan
                  School of Psychology (2012) and a Ph.D. in Counseling
                  Psychology from Western Michigan University (2018). My
                  experience spans therapy and psychological assessment in
                  psychiatric inpatient units, academic medical centers,
                  universities, and outpatient practice settings.
                </p>
                <p className="font-libre-franklin leading-loose text-base sm:text-lg">
                  My therapeutic approach is primarily psychodynamic and
                  humanistic, enriched by influences from positive psychology,
                  existentialism, family systems theory, acceptance and
                  commitment concepts, and mindfulness practices.
                </p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div
                className="overflow-hidden rounded-lg w-full"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  aspectRatio: "9/16",
                }}
              >
                <Image
                  src="/dr-serene-blake.png"
                  alt="Dr. Serena Blake, PsyD - Clinical Psychologist"
                  width={450}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-16 sm:mt-24 lg:mt-48 border-1 border-gray-800 mx-4 sm:mx-8 lg:mx-16" />
    </section>
  );
};

export default About;
