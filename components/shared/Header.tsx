// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="relative min-h-screen flex flex-col justify-center w-full h-full z-50">
//       {/* Dotted Background */}
//       <div className="absolute top-0 left-0 w-full h-[120%] md:h-full lg:h-[125%] -z-20 bg-transparent opacity-50 bg-[radial-gradient(#ffffff33_1px,#0a0a2900_1px)] bg-[size:20px_20px]" />
//       <Image
//         className="absolute bottom-0 right-0 sm:max-md:-translate-y-4 w-20 h-20 md:w-40 md:h-40 object-contain"
//         src={"/images/headerAsset3.png"}
//         alt="blur"
//         width={500}
//         height={500}
//       />
//       <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20">
//         <div className="flex flex-col items-center max-lg:mr-60 max-md:mr-20">
//           <div className="relative">
//             <h1 className=" capitalize text-4xl sm:text-5xl md:text-7xl ">Ecosystem</h1>
//             <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
//               partner's & collaborators
//             </h2>
//             {/* Torus Image */}
//             <Image
//               className="hidden md:max-lg:block top-0 right-0 -translate-y-20 -translate-x-8 absolute w-20 h-20 object-contain"
//               src={"/images/torus.png"}
//               alt="torus-image"
//               width={500}
//               height={500}
//               loading="lazy"
//             />
//             {/* Background Blur */}
//             <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-72 h-40 rounded-full bg-violet-900 blur-4xl -z-30" />
//             <div className="absolute hidden lg:block w-56 h-48 left-0 top-0 -translate-x-1/3 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl  -z-40" />
//           </div>
//         </div>
//         <div className="relative flex flex-col items-center md:max-lg:ml-14 lg:w-1/3 md:self-end">
//           <Image
//             className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto object-contain"
//             src={"/images/Visual.svg"}
//             alt="visual"
//             width={500}
//             height={500}
//             loading="lazy"
//           />

//           {/* Pyramid Image */}
//           <Image
//             className="bottom-0 left-0 -translate-x-6 sm:-translate-x-8 md:-translate-x-20 max-md:translate-y-10 absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
//             src={"/images/pyramid.png"}
//             alt="pyramid-image"
//             width={500}
//             height={500}
//             loading="lazy"
//           />
//           {/* Torus Image */}
//           <Image
//             className="md:max-lg:hidden top-0 right-0 md:left-0 -translate-y-28 sm:-translate-y-32 md:-translate-y-32 lg:-translate-y-20 md:translate-x-1/4  absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
//             src={"/images/torus.png"}
//             alt="torus-image"
//             width={500}
//             height={500}
//             loading="lazy"
//           />

//           {/* Header Blurred Assets */}
//           {[
//             {
//               className:
//                 "absolute top-0 right-0 -translate-y-full md:-translate-y-3/4 lg:-translate-y-1/3 w-20 h-20  object-contain",
//               assetName: "headerAsset1",
//             },
//             {
//               className:
//                 "absolute bottom-0 -left-6 md:-left-10 lg:-left-0 -translate-x-full w-20 h-20 md:w-40 md:h-40 object-contain",
//               assetName: "headerAsset2",
//             },
//             {
//               className:
//                 "absolute md:hidden bottom-0 translate-y-4 -translate-x-3 right-0 w-16 h-16 md:w-20 md:h-20 object-contain -z-10",
//               assetName: "headerAsset3",
//             },
//           ].map(({ className, assetName }, index) => (
//             <Image
//               key={index}
//               className={className}
//               src={`/images/${assetName}.png`}
//               alt={`blur-${assetName}`}
//               width={500}
//               height={500}
//             />
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import Image from "next/image";

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center w-full h-full z-20">
      <div className="relative md:mt-20 flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20 ">
        <div className="flex flex-col items-center max-lg:mr-60 max-md:mr-20">
          <div className="relative">
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
        <div className="relative flex flex-col items-center md:max-lg:ml-14 lg:w-1/3 md:self-end">
          <Image
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto object-contain"
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
            className="md:max-lg:hidden top-0 right-0 md:left-0 -translate-y-28 sm:-translate-y-32 md:-translate-y-32 lg:-translate-y-20 md:translate-x-1/4  absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
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
                "absolute md:hidden bottom-0 translate-y-4 -translate-x-0 right-0 w-24 h-24 object-contain -z-10",
              assetName: "headerAsset4",
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
        <div className="absolute hidden md:max-lg:block left-0 bottom-0 -translate-x-1/4 lg:translate-x-3/4 -translate-y-1/4 w-52 lg:w-72 h-40 md:rounded-r-full lg:rounded-full bg-violet-900 blur-4xl z-10" />
        <div className="absolute hidden md:max-lg:block w-56 h-48 left-0 bottom-0 translate-x-full lg:translate-x-1/2 -translate-y-1/4 rounded-bl-full bg-blue-900 blur-5xl z-0" />
        <Image
          className="absolute -bottom-10 md:bottom-0 right-0 translate-y-1/2 w-20 h-20 md:w-40 md:h-40 object-contain -z-10"
          src={"/images/headerAsset3.png"}
          alt="blur"
          width={500}
          height={500}
        />
      </div>
      {/* Dotted Background */}
      <div className="absolute top-0 left-0 w-full h-[120%] md:h-full lg:h-[125%] -z-20 bg-transparent opacity-50 bg-[radial-gradient(#ffffff33_1px,#0a0a2900_1px)] bg-[size:20px_20px]" />
    </header>
  );
};

export default Header;
