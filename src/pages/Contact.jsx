import ContactContent from "../components/contact/ContactContent";
import HeroSection from "../components/contact/HeroSection";
import "../components/contact/css/contact.css";

export default function Contact() {
  return (
    <>
      <div className="h-screen w-screen bg-black fixed inset-0 z-[100] opacity-0 pointer-events-none transition-all duration-300 ease-out md:!hidden"></div>
      <HeroSection />
      <ContactContent />
    </>
  );
}
