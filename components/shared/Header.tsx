import Image from "next/image";

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center w-full h-full z-50">
      {/* Dotted Background */}
      <div className="absolute top-0 left-0 w-full h-[120%] md:h-full lg:h-[125%] -z-20 bg-transparent opacity-50 bg-[radial-gradient(#ffffff33_1px,#0a0a2900_1px)] bg-[size:20px_20px]" />
      <Image
        className="absolute bottom-0 right-0 sm:max-md:-translate-y-4 w-20 h-20 md:w-40 md:h-40 object-contain"
        src={"/images/headerAsset3.png"}
        alt="blur"
        width={500}
        height={500}
      />
      <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20">
        <div className="flex flex-col items-center max-lg:mr-60 max-md:mr-20">
          <div className="">
            <h1 className="capitalize text-4xl md:text-6xl lg:text-7xl">Ecosystem</h1>
            <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
              partner's & collaborators
            </h2>
          </div>
        </div>
        <div className="relative flex flex-col items-center md:max-lg:ml-14 md:self-end">
          <Image
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 object-contain"
            src={"/images/Visual.svg"}
            alt="visual"
            width={500}
            height={500}
            loading="lazy"
          />

          {/* Pyramid Image */}
          <Image
            className="bottom-0 left-0 -translate-x-6 sm:-translate-x-8 md:-translate-x-20 max-md:translate-y-10 absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            src={"/images/pyramid.png"}
            alt="pyramid-image"
            width={500}
            height={500}
            loading="lazy"
          />
          {/* Torus Image */}
          <Image
            className="top-0 right-0 md:left-0 -translate-y-28 sm:-translate-y-32 md:-translate-y-32 lg:-translate-y-20 md:translate-x-1/4  absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            src={"/images/torus.png"}
            alt="torus-image"
            width={500}
            height={500}
            loading="lazy"
          />

          {/* Header Blurred Assets */}
          {[
            {
              className:
                "absolute top-0 right-0 -translate-y-full md:-translate-y-3/4 lg:-translate-y-1/3 w-20 h-20  object-contain",
              assetName: "headerAsset1",
            },
            {
              className:
                "absolute bottom-0 -left-6 md:-left-10 lg:-left-0 -translate-x-full w-20 h-20 md:w-40 md:h-40 object-contain",
              assetName: "headerAsset2",
            },
            {
              className:
                "absolute md:hidden bottom-0 translate-y-4 -translate-x-3 right-0 w-16 h-16 md:w-20 md:h-20 object-contain -z-10",
              assetName: "headerAsset3",
            },
          ].map(({ className, assetName }, index) => (
            <Image
              key={index}
              className={className}
              src={`/images/${assetName}.png`}
              alt={`blur-${assetName}`}
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
