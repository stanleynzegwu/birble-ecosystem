// "use client";

// import Image from "next/image";
// import bgLarge from "../../public/images/bgLarge.svg";
// import bgLarge_hover from "../../public/images/bgLarge_hover.svg";
// import { useEffect, useState } from "react";
// import { Button } from "../ui/button";

// const CallToAction = () => {
//   const [hovered, setHovered] = useState(false);
//   const [viewportWidth, setViewportWidth] = useState(null);
//   useEffect(() => {

//   },[])

//   return (
//     <div className="relative min-h-screen">
//       {/* Absolutely positioned Div */}
//       <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
//       <div className="w-full h-screen p-10 md:px-20 max-w-5xl mx-auto flex flex-col justify-center">
//         <div
//           className="relative flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-[40rem] lg:h-96 p-6 w-full z-20"
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-3xl transition ease-in-out delay-0 duration-100">
//             <Image
//               //   src={hovered ? bgLarge_hover : bgLarge}
//               src={`/images/bgMid${hovered ? "_hover" : ""}.png`}
//               alt={"backgound image"}
//               width={100}
//               height={100}
//               className="w-full h-full bg-cover object-cover rounded-3xl transition ease-in-out delay-0"
//             />
//           </div>
//           <div className="p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h3 className="text-base md:text-lg">
//                   Bring your space to live with <span className="font-bold">Birble AI</span>
//                 </h3>
//                 <p>
//                   Stop holding a wish sign and start unboxing that special gift, from that special
//                   person on your special day
//                 </p>
//               </div>
//               <Button className="bg-green-200 text-black capitalize medium rounded-3xl px-6">
//                 Sign Up
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallToAction;
"use client";

import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="relative min-h-screen">
      {/* Absolutely positioned Div */}
      <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
      <div className="w-full h-screen p-4 sm:p-10 md:px-20 max-w-xl lg:max-w-5xl mx-auto flex flex-col justify-center">
        <div className="callToAction_BgImage bg-cover object-cover relative flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-[40rem] lg:h-96 p-3 sm:p-6 w-full z-20 ">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end">
            <div className="space-y-4 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base md:text-lg">
                  Bring your space to live with <span className="font-bold">Birble AI</span>
                </h3>
                <p>
                  Stop holding a wish sign and start unboxing that special gift, from that special
                  person on your special day
                </p>
              </div>
              <Button className="bg-green-200 text-black capitalize medium rounded-3xl px-6">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
