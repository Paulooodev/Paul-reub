import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Ethos from "@/components/Ethos";
import Capabilities from "@/components/Capabilities";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>

      <Hero />
      <StatsBar />
      <Ethos />
      <Capabilities />
      <ProjectsCarousel />
      <Footer />
      </main>
    </>
  );
}
