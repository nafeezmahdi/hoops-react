import AboutContent from "../components/about-us/AboutContent";
import HeroSection from "../components/about-us/HeroSection";
import PagePath from "../components/PagePath";
import "../components/about-us//css/about-us.css";

export default function About() {
  return (
    <div>
      <div className="h-screen w-screen bg-black fixed inset-0 z-[100] opacity-0 pointer-events-none transition-all duration-300 ease-out md:!hidden"></div>
      <PagePath page="About Us" />
      <HeroSection />
      <AboutContent />
    </div>
  );
}
