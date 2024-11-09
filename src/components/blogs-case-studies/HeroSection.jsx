/* eslint-disable react/prop-types */
import VRImage from "../../assets/image/virtual-reality.png";

export default function HeroSection({ date, title, intro }) {
  return (
    <section className="bnc-container bg-hero bg-no-repeat bg-cover bg-center">
      <div className="bnc-hero-container">
        <div className="grid gap-6 justify-items-center lg:justify-items-start items-center lg:items-start">
          <p
            data-aos="fade-up"
            className="text-[#EDEDED] text-sm sm:text-base lg:text-lg font-medium max-w-[40ch] aos-init aos-animate"
          >
            {date}
          </p>
          <h2
            data-aos="fade-up"
            className="text-white text-center lg:text-start max-w-[15ch] aos-init"
          >
            {title}
          </h2>
          <p
            data-aos="fade-up"
            className="text-[#EDEDED] text-sm sm:text-base lg:text-lg font-medium max-w-[40ch] aos-init"
          >
            {intro}
          </p>
        </div>
        <img
          src={VRImage}
          alt=""
          data-aos="fade-up"
          className="rounded-2xl aos-init aos-animate"
        />
      </div>
    </section>
  );
}
