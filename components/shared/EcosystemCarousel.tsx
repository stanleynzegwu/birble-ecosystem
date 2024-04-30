import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EcosystemCarousel = () => {
  return (
    <Carousel className="min-h-screen z-0 p-10 flex flex-col justify-center">
      {/* absolutely positione lef & right opacity */}
      <div className="absolute top-0 left-0 z-20 h-full w-20 lg:w-24 bg-gradient-to-r from-[#0a0a29] from-10% via-[#0a0a29] via-20% to-transparent to-90%" />
      <div className="absolute top-0 right-0 z-20 h-full w-20 lg:w-24 bg-gradient-to-l from-[#0a0a29] from-10% via-[#0a0a29] via-20% to-transparent to-90%" />
      {/* absolutely postioned bgcolor */}
      {/* Absolutely positioned Div */}
      <div className="absolute hidden md:block right-0 bottom-0 transform -translate-y-1/4 w-72 h-36  rounded-full bg-blue-900 blur-7xl overflow-hidden z-20" />
      <div className="flex flex-col gap-6">
        <CarouselContent className="">
          {[
            {
              iconPath: "skale-logo",
              header: "SKALE Partnership",
              subheader:
                "Our collaboration with SKALE signifies a pivotal shift toward more secure and cost-effective on-chain storage. Transitioning from traditional databases, this move not only enhances security but also significantly reduces costs for both Birble AI and our valued customers. Setting up nad operating our own node allows us to validate the network,host the AI models , and offer these models to others for sale",
            },
            {
              iconPath: "thirdweb-logo",
              header: "ThirdWeb",
              subheader:
                "Our collaboration with third web has allowed us to make use of cutting edge technology, such as smart contract templates that are already audited, SDK and API’s allowing us to have a more secure and scalable platform",
            },
            {
              iconPath: "chainlink-link-logo",
              header: "Chainlink Collaboration",
              subheader:
                "Chainlink plays a crucial role in ensuring fairness and transparency within our ecosystem. Leveraging Chainlink VRF (Verifiable Random Function), we select random users for rewards and airdrops. This technology's provably fair and secure nature guarantees that results remain untampered with, safeguarding against manipulation by any entity. Additionaly, we integrate Chainlink's oracle for real-world verification on-chain,enhancing reliability",
            },
            {
              iconPath: "leonardoAI-logo",
              header: "LeonardoAI",
              subheader:
                "Excited to announce our collaboration with LeonardoAI, bringing cutting-edge text-to-image APIs to our platform. With diverse models, Birble AI empowers creative visualization, transforming text and enhancing images with advanced editing tools.",
            },
            {
              iconPath: "remostart-logo",
              header: "Collaborations with RemoStart",
              subheader:
                "These partnerships signify our commitment to nurturing the developer community. Collaborating with these entities allows us to contribute to the community by training students and interns in web3 and AI, fostering growth and learning.",
            },
            {
              iconPath: "hf-logo",
              header: "HuggingFace",
              subheader:
                "Collaborating with Hugging Face ensures high standards for AI models in our ecosystem. We use their tools for fine-tuning and deploying impactful models, streamlining our development process. This partnership allows us to focus on innovation and keep our AI solutions at the forefront of technological advancement.",
            },
          ].map(({ iconPath, header, subheader }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative space-y-6 rounded-3xl bg-darkGrayishBlue p-6 h-96">
                <Image
                  className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 -translate-y-1/2 translate-x-1/2 z-50"
                  src={`/icons/${iconPath}.png`}
                  alt={iconPath}
                  width={50}
                  height={50}
                />
                <h3 className="text-lg">{header}</h3>
                <p className="text-gray-400">{subheader}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="max-w-sm mx-auto space-x-4">
          <CarouselPrevious className="w-12 h-12" />
          <CarouselNext className="w-12 h-12" />
        </div>
      </div>
    </Carousel>
  );
};

export default EcosystemCarousel;
