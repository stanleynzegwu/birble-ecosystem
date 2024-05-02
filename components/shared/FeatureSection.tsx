import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="relative p-4 sm:p-10  flex flex-col justify-center gap-32">
      <div className="absolute hidden md:block left-0 bottom-0 -translate-y-1/4 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
      <div className=" max-w-sm md:max-w-md 2xl:max-w-2xl space-y-4 mx-auto ">
        <h3 className="px-2 text-center text-xl md:text-2xl leading-normal md:leading-snug">
          Birble AI is the corner stone <br />
          of Web3 and AI for everyone
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto text-center leading-relaxed">
          At Birble AI, these partnerships aren't just collaborations—they're pillars that support
          our commitment to innovation, community empowerment, and a sustainable future. Together,
          we're shaping a dynamic and inclusive ecosystem where technology meets purpose.
        </p>
      </div>
      {/* ////////// */}
      <div className="relative max-w-sm md:max-w-lg lg:max-w-2xl mx-auto p-4 border-gray-400 border-[.5px]">
        {[
          "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
          "right-0 top-0 translate-x-1/2 -translate-y-1/2",
          "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
          "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        ].map((className, index) => (
          <Image
            key={index}
            className={`absolute w-5 h-5 lg:w-6 lg:h-6 object-contain ${className}`}
            src={"/icons/plus-icon.svg"}
            alt="plus icon"
            width={50}
            height={50}
            loading="lazy"
          />
        ))}
        <h3 className="px-2 mb-4 text-center text-xl md:text-2xl leading-normal md:leading-snug">
          Building for the Next<span className="text-mintGreen">Gen</span>
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto text-center leading-relaxed">
          Birble AI is committed to fostering the next generation of blockchain innovators. We're
          actively training new developers and student interns, empowering them with the skills and
          knowledge they need to contribute to our ecosystem's growth. This dedication to talent
          development ensures that our ecosystem remains at the forefront of blockchain innovation.
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
