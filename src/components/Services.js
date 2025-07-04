import Image from "next/image";

const Services = () => {
  const areas = [
    {
      title: "Therapy for Healthcare Providers and Students",
      description:
        "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, or imposter syndrome. We can address the unique stressors of your professional environment along with challenges in other areas of your life.",
      imageUrl: "/service-healthcare.jpg", // You'll need to add this image
    },
    {
      title: "Therapy for Trauma and Grief",
      description:
        "Life's challenges can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences and work toward a sense of grounding and meaning.",
      imageUrl: "/trauma-and-grief.png", // You'll need to add this image
    },
    {
      title: "Therapy for Second Generation Individuals In Immigrant Families",
      description:
        "Second generation individuals often navigate the complexities of multiple cultures and diverse expectations. Therapy offers a supportive space to explore and process this unique aspect of your identity.",
      imageUrl: "/service-immigrant.jpg", // You'll need to add this image
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#F3F0E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2
          className="text-3xl md:text-4xl lg:text-4xl text-stone-600 font-playfair text-center leading-normal"
          style={{ fontWeight: "100" }}
        >
          Therapy can be a space where you invest in yourself—
          <br className="hidden md:block" />
          one of the highest forms of self-care.
        </h2>

        <div className="mt-10 text-center text-stone-600 max-w-3xl mx-auto leading-loose ">
          <p className="mb-6 font-libre-franklin">
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </p>
        </div>
      </div>
      <hr className="mt-8 mb-48 ml-8 mr-8"></hr>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-light text-stone-600 font-playfair">
            Areas of Focus
          </h2>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 ">
          {areas.map((area, index) => (
            <div key={index} className="text-center ">
              {/* Circular Image */}
              <div className="mb-8">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                  {index === 0 ? (
                    <Image
                      src="/healthcare.png"
                      alt="Healthcare Providers Therapy"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-300 flex items-center justify-center">
                      {/* Placeholder for now - you can replace with actual images */}
                      <div className="text-stone-500 text-6xl">
                        {index === 1 && (
                          <Image
                            src="/trauma-and-grief.png"
                            alt="Healthcare Providers Therapy"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 2 && (
                          <Image
                            src="/second-gen.png"
                            alt="Healthcare Providers Therapy"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-normal text-stone-600 font-lora mb-6 leading-tight">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed font-light font-libre-franklin max-w-sm mx-auto leading-loose">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
