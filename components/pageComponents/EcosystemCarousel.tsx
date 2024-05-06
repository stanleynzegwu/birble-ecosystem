import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BIRBLEAI_PARTNERS } from "@/lib/constants";

const EcosystemCarousel = () => {
  return (
    <Carousel className="z-0 flex flex-col justify-center">
      <div className="flex flex-col gap-6">
        <CarouselContent className="">
          {BIRBLEAI_PARTNERS.map(({ iconPath, name, about }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative space-y-6 rounded-3xl bg-darkGrayishBlue p-6 h-96">
                <Image
                  className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 -translate-y-1/2 translate-x-1/2 z-50"
                  src={`/icons/${iconPath}.png`}
                  alt={iconPath}
                  width={50}
                  height={50}
                />
                <h3 className="text-lg">{name}</h3>
                <p className="text-gray-400">{about}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Buttons */}
        <div className="max-w-sm mx-auto space-x-4">
          <CarouselPrevious className="w-12 h-12" />
          <CarouselNext className="w-12 h-12" />
        </div>
      </div>
      {/* Background Blur */}
      <div className="absolute hidden md:block right-0 bottom-0 transform -translate-y-1/4 w-72 h-36  rounded-full bg-blue-900 blur-7xl overflow-hidden z-20" />
    </Carousel>
  );
};

export default EcosystemCarousel;
