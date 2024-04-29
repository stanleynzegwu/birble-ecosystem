// import Image from "next/image";
// import EcosystemCarousel from "@/components/shared/EcosystemCarousel";
// import CallToAction from "@/components/shared/CallToAction";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col ">

//       {/* ////// */}
//       <section className="p-6 space-y-20">
//         <div className=" max-w-sm md:max-w-md space-y-4 mx-auto ">
//           <h3 className="px-2 text-center text-xl md:text-2xl leading-normal md:leading-snug">
//             Birble AI is the corner stone <br />
//             of Web3 and AI for everyone
//           </h3>
//           <p className="text-gray-400 max-w-xl mx-auto text-center leading-relaxed">
//             At Birble AI, these partnerships aren't just collaborations—they're pillars that support
//             our commitment to innovation, community empowerment, and a sustainable future. Together,
//             we're shaping a dynamic and inclusive ecosystem where technology meets purpose.
//           </p>
//         </div>

//         {/* ////////// */}
//         <div className="relative max-w-sm md:max-w-lg lg:max-w-xl space-y-4 mx-auto p-4 border-gray-400 border-[.5px]">
//           {[
//             "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
//             "right-0 top-0 translate-x-1/2 -translate-y-[1.63rem]",
//             "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
//             "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
//           ].map((className, index) => (
//             <Image
//               key={index}
//               className={`absolute w-5 h-5 object-contain ${className}`}
//               src={"/icons/plus-icon.svg"}
//               alt="plus icon"
//               width={50}
//               height={50}
//               loading="lazy"
//             />
//           ))}

//           <h3 className="px-2 text-center text-xl md:text-2xl leading-normal md:leading-snug">
//             Building for the Next<span className="text-green-200">Gen</span>
//           </h3>
//           <p className="text-gray-400 max-w-xl mx-auto text-center leading-relaxed">
//             Birble AI is committed to fostering the next generation of blockchain innovators. We're
//             actively training new developers and student interns, empowering them with the skills
//             and knowledge they need to contribute to our ecosystem's growth. This dedication to
//             talent development ensures that our ecosystem remains at the forefront of blockchain
//             innovation.
//           </p>
//         </div>
//       </section>
//       {/* hexapshere */}
//       <section className="flex flex-col items-center md:flex-row md:justify-center">
//         <div className="">
//           <Image
//             className="w-56 h-56 lg:w-96 lg:h-96 object-contain"
//             src={"/images/hexasphere.svg"}
//             alt="visual"
//             width={500}
//             height={500}
//             loading="lazy"
//           />
//         </div>
//         <div className="max-w-sm ">
//           <h2>
//             The <br /> Birble <br /> Hexasphere
//           </h2>
//           <p className="text-gray-400">
//             Birble AI is committed to fostering the next generation of blockchain innovators. We're
//             actively training new developers and student interns, empowering them with the skills
//           </p>
//         </div>
//       </section>
//       <EcosystemCarousel />
//       <CallToAction />
//     </main>
//   );
// }

import Image from "next/image";
import EcosystemCarousel from "@/components/shared/EcosystemCarousel";
import CallToAction from "@/components/shared/CallToAction";
import Header from "@/components/shared/Header";
import FeatureSection from "@/components/shared/FeatureSection";
import HexasphereSection from "@/components/shared/HexasphereSection";

export default function Home() {
  return (
    <main className="w-full h-screen">
      {/* absolutely positioned divs */}
      <div className="absolute md:hidden lg:inline left-0 top-0 w-48 h-40 md:w-60 md:h-40 -translate-y-1/2 -translate-x-1/4 rounded-b-full bg-purple-900 blur-3xl overflow-hidden z-0" />
      <div className="absolute right-0 top-0 -translate-y-1/2 w-36 h-40 md:w-56 md:h-48  rounded-l-full bg-violet-900 blur-3xl overflow-hidden z-0" />
      <Header />
      <FeatureSection />
      <HexasphereSection />
      <EcosystemCarousel />
    </main>
  );
}
