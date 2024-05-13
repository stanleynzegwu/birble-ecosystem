"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import EcosystemCarousel from "./EcosystemCarousel";
import HexasphereSvg from "./HexasphereSvg";

export default function HexasphereSection() {
  return (
    <section className="relative p-4 xs:px-10 sm:p-10 flex flex-col gap-16">
      <div className="w-full absolute inset-0 h-[75%]">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative flex flex-col gap-6 items-center lg:flex-row lg:min-h-screen lg:justify-center lg:gap-16">
        <HexasphereSvg className="h-auto w-full max-md:max-w-md md:max-lg:max-w-lg lg:w-2/5 lg:h-auto object-contain" />
        <div className="max-w-sm">
          <h2 className="mb-4 lg:mb-5">
            The <br /> Birble <br /> Hexasphere
          </h2>
          <p className="text-gray-400">
            Birble AI is committed to fostering the next generation of blockchain innovators. We're
            actively training new developers and student interns, empowering them with the skills
          </p>
        </div>
      </div>
      <EcosystemCarousel />
    </section>
  );
}
