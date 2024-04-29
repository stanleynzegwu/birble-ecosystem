// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="flex flex-col justify-center w-full h-full py-6 ">
//       <div className="max-lg:pl-10 max-md:pr-10 flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20 ">
//         <div className=" flex flex-col items-center self-start">
//           <div className="">
//             <h1 className="capitalize text-4xl md:text-6xl lg:text-7xl">Ecosystem</h1>
//             <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
//               partner's & collaborators
//             </h2>
//           </div>
//         </div>
//         <div className=" flex flex-col items-center self-end">
//           <Image
//             className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
//             src={"/images/Visual.svg"}
//             alt="visual"
//             width={500}
//             height={500}
//             loading="lazy"
//           />
//         </div>
//       </div>
//       {/* absolutely positioned divs */}
//       {/* <div className="absolute left-0 w-40 h-40 -translate-y-1/2 -translate-x-1/3 rounded-b-full bg-purple-900 blur-3xl overflow-hidden z-0" />
//     <div className="absolute right-0 w-40 h-40 md:w-56 md:h-48 -translate-y-1/2 translate-x-1/3 rounded-l-full bg-violet-900 blur-3xl overflow-hidden z-0" />
//     <div className="absolute hidden md:block left-32 bottom-20 w-56 h-40  -translate-y-1/2  rounded-full bg-violet-900  overflow-hidden blur-4xl z-10" />
//     <div className="absolute hidden md:block left-20 bottom-10 w-56 h-40  -translate-y-1/2  rounded-full bg-blue-900  overflow-hidden blur-4xl z-0" /> */}

//       {/*
//     <div className="relative min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-center z-20">
//       <div className="flex-1 flex flex-col items-center">
//         <div className="">
//           <h1 className="capitalize text-4xl md:text-6xl lg:text-7xl">Ecosystem</h1>
//           <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
//             partner's & collaborators
//           </h2>
//         </div>
//       </div>
//       <div className="flex-1 flex flex-col items-center">
//         <Image
//           className="w-96 h-96 object-contain"
//           src={"/images/Visual.svg"}
//           alt="visual"
//           width={500}
//           height={500}
//           loading="lazy"
//         />
//       </div>
//     </div> */}
//     </header>
//   );
// };

// export default Header;

import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col justify-center w-full h-full py-6 ">
      <div className=" flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20 ">
        <div className=" flex flex-col items-center max-md:mr-20">
          <div className="">
            <h1 className="capitalize text-4xl md:text-6xl lg:text-7xl">Ecosystem</h1>
            <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
              partner's & collaborators
            </h2>
          </div>
        </div>
        <div className=" flex flex-col items-center max-md:ml-14 ">
          <Image
            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
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

export default Header;
