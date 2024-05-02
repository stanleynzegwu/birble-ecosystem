"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";
import EcosystemCarousel from "./EcosystemCarousel";

export default function SparklesPreview() {
  return (
    <section className="relative p-4 sm:p-10 flex flex-col gap-16">
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
      <div className="relative flex flex-col items-center lg:flex-row lg:min-h-screen lg:justify-center gap-6 lg:gap-16">
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
