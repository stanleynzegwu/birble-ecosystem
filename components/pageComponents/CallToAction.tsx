"use client";

import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className="relative lg:min-h-screen w-full">
      <div className="w-full h-screen min-h-[650px] lg:min-h-[500px] max-h-[700px] md:max-h-[900px] px-4 xs:px-10 py-10 lg:p-0 max-md:max-w-md max-lg:max-w-xl lg:w-[80%] mx-auto flex flex-col justify-center">
        <div className="relative group flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-full lg:h-3/4 p-3 sm:p-6 lg:p-8 2lg:p-10 w-full z-20">
          <div className="bg-[url('../public/images/Dark.svg')] lg:bg-[url('../public/images/Light.svg')] absolute -z-10 rounded-3xl inset-0 bg-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
          {/* <div className="bg-[url('../public/images/Dark.svg')] absolute -z-10 rounded-3xl inset-0 bg-cover group-hover:bg-[url('../public/images/Light.svg')] transition-all duration-10 linear" /> */}
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-900 flex flex-col justify-end overflow-hidden">
            {/* <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end"> */}
            <div className="absolute bottom-0 left-0 h-1/4 w-2/6 rounded-tr-full bg-gradient-to-bl from-purple-900 to-purple-300 blur-4xl z-20" />
            <div className="min-h-[60%] flex flex-col gap-6 xs:gap-10 justify-between max-w-sm lg:max-w-md">
              <div className="">
                <h3 className="max-md:text-xl md:text-3xl pb-3 lg:py-2">
                  Bring your space to live with{" "}
                  <span className="font-semibold lg:font-bold">Birble AI</span>
                </h3>
                <small>
                  Stop holding a wish sign and start unboxing that special gift, from that special
                  person on your special day
                </small>
              </div>
              <Button className="w-24 md:w-28 bg-mintGreen hover:bg-white text-black capitalize medium rounded-3xl px-6 transition-all duration-300 ease-in-out z-20">
                Sign Up
              </Button>
            </div>
            <div className="absolute right-0 top-0 -translate-y-1/2 w-36 h-40 md:h-2/5 md:w-56 2lg:w-72 rounded-l-full bg-violet-900 blur-2xl md:blur-3xl 2lg:blur-4xl overflow-hidden -z-20" />
          </div>
        </div>
      </div>
      {/* Background Blur */}
      <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
    </section>
  );
};

export default CallToAction;
