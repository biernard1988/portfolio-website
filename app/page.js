import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; // Disable the automatic addition of CSS styles


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] text-white">
      <Navbar />
      <div class="container mx-auto mt-24 px-12 py-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
