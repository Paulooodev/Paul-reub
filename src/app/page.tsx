import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-night">
        <h1 className="font-mono text-lg uppercase tracking-widest text-brand">
          Paulreub — navbar framed ✅
        </h1>
      </main>
    </>
  );
}
