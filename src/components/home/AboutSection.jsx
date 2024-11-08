import AboutIMG from "../../assets/image/about-us.png";
import RightArrowSVG from "../../assets/arrow-right.svg";

export default function AboutSection() {
  return (
    <section className="home-container bg-[#F9F8F3]">
      <div className="container mx-auto px-4 grid gap-8 xl:gap-10 2xl:gap-12 lg:grid-cols-2 items-center py-10">
        <img
          src={AboutIMG}
          alt=""
          data-aos="fade-up"
          className="about-img aos-init aos-animate"
        />
        <div className="grid place-items-center lg:place-items-start gap-4 md:gap-6 xl:gap-8 justify-between ">
          <p data-aos="fade-up" className="about-title aos-init aos-animate">
            About us
          </p>
          <h3
            data-aos="fade-up"
            className="text-center lg:text-left max-w-[100ch] lg:max-w-none aos-init aos-animate"
          >
            Solutions to boost ROI and growth for your enterprise
          </h3>
          <p data-aos="fade-up" className="about-text aos-init">
            We meticulously orchestrate a harmonious synergy between advertisers
            and publishers for optimal results.
          </p>
          <a
            data-aos="fade-up"
            href="#/case-studies"
            className="about-link aos-init"
          >
            Find out more
            <img
              src={RightArrowSVG}
              alt="arrow-right"
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-all duration-150 ease-out"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
