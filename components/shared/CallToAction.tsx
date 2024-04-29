"use client";

import Image from "next/image";
import bgLarge from "../../public/images/bgLarge.svg";
import bgLarge_hover from "../../public/images/bgLarge_hover.svg";
import { useState } from "react";

const CallToAction = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-96 p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-3xl transition ease-in-out delay-0">
        <Image
          //   src={hovered ? bgLarge_hover : bgLarge}
          src={`/images/bgLarge${hovered ? "_hover" : ""}.svg`}
          alt={"backgound image"}
          //   placeholder="blur"
          width={100}
          height={100}
          className="w-full h-full bg-cover object-cover rounded-3xl transition ease-in-out delay-0"
        />
      </div>
      <div className="p-4 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium earum eligendi
        voluptatem non fugiat veritatis modi perferendis accusamus ullam ipsum, vel id. Consequatur
        facilis modi, harum pariatur earum exercitationem?
      </div>
    </div>
  );
};

export default CallToAction;
