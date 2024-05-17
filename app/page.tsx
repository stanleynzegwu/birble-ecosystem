import CallToAction from "@/components/pageComponents/CallToAction";
import Header from "@/components/pageComponents/Header";
import FeatureSection from "@/components/pageComponents/FeatureSection";
import HexasphereSection from "@/components/pageComponents/HexasphereSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-6 md:gap-8 lg:gap-10">
      <Header />
      <FeatureSection />
      <HexasphereSection />
      <CallToAction />
    </main>
  );
}
