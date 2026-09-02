import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Ethos from "@/components/Ethos";
import Capabilities from "@/components/Capabilities";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Ethos />
      <Capabilities />
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-night">
        <h1 className="font-mono text-lg uppercase tracking-widest text-brand">
          Paulreub — navbar framed ✅
        </h1>
      </main>
    </>
  );
}
