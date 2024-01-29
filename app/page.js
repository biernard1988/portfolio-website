import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mx-auto mt-24 px-12 py-10">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
