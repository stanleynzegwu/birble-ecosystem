// "use client";

// import { Button } from "../ui/button";

// const CallToAction = () => {
//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Absolutely positioned Div */}
//       <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
//       <div className="w-full h-screen px-4 py-10 sm:p-10 md:px-20 max-w-xl lg:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col justify-center">
//         <div className="relative group flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-full lg:h-[80%] p-3 sm:p-6 w-full z-20">
//           <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-3xl inset-0 callToAction_BgImage bg-cover object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" />
//           <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end 2xl:justify-center">
//             <div className="space-y-4 sm:space-y-8">
//               <div className="space-y-2 sm:space-y-4">
//                 <h6 className="2xl:text-2xl">
//                   Bring your space to live with <span className="font-bold">Birble AI</span>
//                 </h6>
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
    <section className="relative min-h-screen w-full">
      {/* Absolutely positioned Div */}
      <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
      {/* <div className="w-full h-screen min-h-[600px] lg:min-h-[500px] px-4 py-10 sm:p-10 sm:px-20 lg:p-0 max-lg:max-w-xl lg:w-[80%] mx-auto flex flex-col justify-center "> */}
      <div className="w-full h-screen min-h-[600px] lg:min-h-[500px] px-4 py-10 lg:p-0 max-lg:max-w-xl lg:w-[80%] mx-auto flex flex-col justify-center ">
        <div className="relative group flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-full lg:h-3/4 p-3 sm:p-6 w-full z-20">
          <div className="bg-[url('../public/images/bgMid.png')] lg:bg-[url('../public/images/bgLarge.png')] absolute -z-10 rounded-3xl inset-0 bg-cover object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" />
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end 2xl:justify-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h6 className="2xl:text-2xl">
                  Bring your space to live with <span className="font-bold">Birble AI</span>
                </h6>
                <p>
                  Stop holding a wish sign and start unboxing that special gift, from that special
                  person on your special day
                </p>
              </div>
              <Button className="bg-mintGreen hover:bg-white text-black capitalize medium rounded-3xl px-6 transition-all duration-300 ease-in-out">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
