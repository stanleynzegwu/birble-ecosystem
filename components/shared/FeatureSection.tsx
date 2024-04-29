import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="min-h-screen p-10 space-y-32">
      <div className=" max-w-sm md:max-w-md space-y-4 mx-auto ">
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
      <div className="relative max-w-sm md:max-w-lg lg:max-w-xl space-y-4 mx-auto p-4 border-gray-400 border-[.5px]">
        {[
          "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
          "right-0 top-0 translate-x-1/2 -translate-y-[1.63rem]",
          "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
          "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        ].map((className, index) => (
          <Image
            key={index}
            className={`absolute w-5 h-5 object-contain ${className}`}
            src={"/icons/plus-icon.svg"}
            alt="plus icon"
            width={50}
            height={50}
            loading="lazy"
          />
        ))}
        <h3 className="px-2 text-center text-xl md:text-2xl leading-normal md:leading-snug">
          Building for the Next<span className="text-green-200">Gen</span>
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
