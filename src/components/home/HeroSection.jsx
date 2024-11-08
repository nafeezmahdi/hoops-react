import RightArrowSVG from "../../assets/arrow-right-dark.svg";

export default function HeroSection() {
  return (
    <section className="h-full">
      <div className="outline--none">
        <div className="carousel carousel-slider">
          <div className="slider-wrapper axis-horizontal">
            <ul className="slider animated">
              <li className="slide">
                <div className="bg-hero bg-cover bg-center bg-no-repeat h-full w-full py-12 sm:py-14 md:py-20 xl:py-52">
                  <div className="container flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 justify-center items-center w-full mx-auto px-4">
                    <h1 className="text-center max-w-[20ch] mx-auto">
                      We connect a brand to the right solution partner
                    </h1>
                    <a href="#/blogs" className="slide-link">
                      <span>Learn More</span>
                      <img
                        src={RightArrowSVG}
                        alt="arrow-right"
                        className="slide-img"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
