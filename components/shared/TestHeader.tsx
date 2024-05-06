import Image from "next/image";

const TestHeader = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center w-full z-50">
      {/* Dotted Background */}
      <div className="absolute top-0 left-0 w-full h-[120%] md:h-full lg:h-[125%] -z-20 bg-transparent opacity-50 bg-[radial-gradient(#ffffff33_1px,#0a0a2900_1px)] bg-[size:20px_20px]" />
      <Image
        className="absolute bottom-0 right-0 sm:max-md:-translate-y-4 w-20 h-20 md:w-40 md:h-40 object-contain"
        src={"/images/headerAsset3.png"}
        alt="blur"
        width={500}
        height={500}
      />
      <div className="p-4 sm:p-10 md:px-20 md:max-lg:pr-0 flex flex-col lg:flex-row lg:gap-20 lg:items-center">
        <div className="w-full flex flex-col items-center ">
          <div className="relative self-start lg:self-end">
            <h1 className=" capitalize text-4xl sm:text-5xl md:text-7xl ">Ecosystem</h1>
            <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
              partner's & collaborators
            </h2>
            {/* Torus Image */}
            <Image
              className="hidden md:max-lg:block top-0 right-0 -translate-y-20 -translate-x-8 absolute w-20 h-20 object-contain"
              src={"/images/torus.png"}
              alt="torus-image"
              width={500}
              height={500}
              loading="lazy"
            />
            {/* Background Blur */}
            <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-72 h-40 rounded-full bg-violet-900 blur-4xl -z-30" />
            <div className="absolute hidden lg:block w-56 h-48 left-0 top-0 -translate-x-1/3 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl  -z-40" />
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-start md:max-lg:justify-end w-full bg-red-400  max-md:self-end">
          <Image
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
            src={"/images/Visual.svg"}
            alt="visual"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default TestHeader;
