// import Image from "next/image";

// const HexasphereSection = () => {
//   return (
//     <section className="min-h-screen p-4 sm:p-10 flex flex-col items-center lg:flex-row lg:justify-center gap-10 lg:gap-16">
//       <div className="">
//         <Image
//           className="h-80 w-80 md:w-96 md:h-96 lg:w-96 lg:h-96 object-contain"
//           src={"/images/hexasphere.svg"}
//           alt="visual"
//           width={500}
//           height={500}
//           loading="lazy"
//         />
//       </div>
//       <div className="max-w-sm ">
//         <h2>
//           The <br /> Birble <br /> Hexasphere
//         </h2>
//         <p className="text-gray-400">
//           Birble AI is committed to fostering the next generation of blockchain innovators. We're
//           actively training new developers and student interns, empowering them with the skills
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HexasphereSection;

"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";

export default function SparklesPreview() {
  return (
    <section className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="min-h-screen p-4 sm:p-10 flex flex-col items-center lg:flex-row lg:justify-center max-lg:justify-between lg:gap-16">
        <div className="">
          <Image
            className="h-80 w-80 md:w-96 md:h-96 lg:w-96 lg:h-96 object-contain"
            src={"/images/hexasphere.svg"}
            alt="visual"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="max-w-sm ">
          <h2>
            The <br /> Birble <br /> Hexasphere
          </h2>
          <p className="text-gray-400">
            Birble AI is committed to fostering the next generation of blockchain innovators. We're
            actively training new developers and student interns, empowering them with the skills
          </p>
        </div>
      </div>
    </section>
  );
}
