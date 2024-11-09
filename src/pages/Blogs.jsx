import HeroSection from "../components/blogs-case-studies/HeroSection";
import PagePath from "../components/PagePath";
import BlogsContent from "../components/blogs-case-studies/BlogsContent";
import "../components/blogs-case-studies/css/blogs-case-studies.css";

export default function Blogs() {
  return (
    <>
      <div className="h-screen w-screen bg-black fixed inset-0 z-[100] opacity-0 pointer-events-none transition-all duration-300 ease-out md:!hidden"></div>
      <PagePath page="Blogs" />
      <HeroSection
        date="November 08, 2024"
        title="Blogs"
        intro="Read our blogs to learn more about our products and services."
      />
      <BlogsContent />
    </>
  );
}
