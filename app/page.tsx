import CallToAction from "@/components/shared/CallToAction";
import Header from "@/components/shared/Header";
import FeatureSection from "@/components/shared/FeatureSection";
import HexasphereSection from "@/components/shared/HexasphereSection";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-6 sm:gap-6 md:gap-8 lg:gap-10">
      {/* absolutely positioned divs */}
      <div className="absolute md:hidden lg:inline left-0 top-0 w-48 h-40 md:w-60 md:h-40 -translate-y-1/2 -translate-x-1/4 rounded-b-full bg-blur-purple blur-3xl overflow-hidden z-0" />
      <div className="absolute right-0 top-0 -translate-y-1/2 w-36 h-40 md:w-56 md:h-48  rounded-l-full bg-violet-900 blur-3xl overflow-hidden z-0" />
      <div className="absolute hidden md:max-lg:block left-0 bottom-14 -translate-x-1/4 lg:translate-x-3/4 w-52 lg:w-72 h-40  -translate-y-3/4  md:rounded-r-full lg:rounded-full bg-violet-900 blur-4xl z-10" />
      <div className="absolute hidden md:max-lg:block w-56 h-48 left-0 bottom-0 translate-x-full lg:translate-x-1/2 -translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl z-0" />
      <div className="absolute hidden lg:block right-0 bottom-0 -translate-y-full -translate-x-1/2 w-32 h-32 rounded-full bg-blue-900 overflow-hidden blur-6xl z-0" />
      <Header />
      <FeatureSection />
      <HexasphereSection />
      <CallToAction />
    </main>
  );
}
