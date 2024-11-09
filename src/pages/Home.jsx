import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import MailSection from "../components/MailSection";
import SolutionsSection from "../components/home/SolutionsSection";
import StoriesSection from "../components/home/StoriesSection";
import "../components/home/css/home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <MailSection />
      <StoriesSection />
    </>
  );
}
