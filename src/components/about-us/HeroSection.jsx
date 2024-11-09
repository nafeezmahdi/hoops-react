import AboutUsImage from "../../assets/image/about-us-bg.png";

export default function HeroSection() {
  return (
    <section className="about-container bg-hero bg-no-repeat bg-cover bg-center !py-0 overflow-hidden">
      <div className="hero-container">
        <div className="hero-text-container">
          <h2
            data-aos="fade-up"
            className="text-white text-center lg:text-start max-w-[15ch] aos-init aos-animate"
          >
            Our team is driven for your success
          </h2>
        </div>
        <img
          src={AboutUsImage}
          alt=""
          data-aos="fade-up"
          className="hero-img aos-init aos-animate"
        />
      </div>
    </section>
  );
}
