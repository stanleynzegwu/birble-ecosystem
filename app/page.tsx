import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="w-full h-screen">
      {/* absolutely positioned divs */}
      <div className="absolute md:hidden lg:inline left-0 top-0 w-60 h-40 -translate-y-1/2 -translate-x-1/4 rounded-b-full bg-purple-900 blur-3xl overflow-hidden z-0" />
      <div className="absolute right-0 top-0 -translate-y-1/2 w-40 h-40 md:w-56 md:h-48  rounded-l-full bg-violet-900 blur-3xl overflow-hidden z-0" />
      <Header />
    </main>
  );
}
