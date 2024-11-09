import HeroSection from "../components/blogs-case-studies/HeroSection";
import StudiesContent from "../components/blogs-case-studies/StudiesContent";
import PagePath from "../components/PagePath";

export default function CaseStudies() {
  return (
    <>
      <div className="h-screen w-screen bg-black fixed inset-0 z-[100] opacity-0 pointer-events-none transition-all duration-300 ease-out md:!hidden"></div>
      <PagePath page="Case Studies" />
      <HeroSection
        date="November 08, 2024"
        title="Case Studies"
        intro="Read our blogs to learn more about our products and services."
      />
      <StudiesContent />
    </>
  );
}
