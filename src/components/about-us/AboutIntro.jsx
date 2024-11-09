import HoopsImage from "../../assets/image/hoops.png";
import ArrowRightDark from "../../assets/arrow-right-dark.svg";

export default function AboutIntro() {
  return (
    <section className="about-container">
      <div className="about-intro-container">
        <h3 data-aos="fade-up" className="intro-title aos-init aos-animate">
          Welcome to the Juuuno
        </h3>
        <div className="grid gap-8 lg:gap-20 lg:grid-cols-2 items-center">
          <div data-aos="fade-up" className="aos-init aos-animate">
            <img
              src={HoopsImage}
              alt=""
              className="w-full h-full object-cover max-h-[45rem] object-center"
            />
          </div>
          <div className="grid gap-10 lg:place-items-start place-items-center">
            <p data-aos="fade-up" className="intro-text aos-init aos-animate">
              Juuuno is your trusted partner in navigating the complexities of
              the business world. We are a business consulting company dedicated
              to empowering entrepreneurs and organizations by providing
              innovative solutions to their most pressing challenges. With a
              sharp focus on opening business discussions, streamlining product
              sales, optimizing media strategies, and refining Go-To-Market
              (GTM) approaches, we pave the way for your success. ‍
            </p>
            <p data-aos="fade-up" className="intro-text aos-init aos-animate">
              We understand that every business is unique, and so are its
              challenges. Our team of experienced consultants is committed to
              tailoring strategies that suit your specific needs. Whether you
              are looking to expand your market reach, enhance customer
              engagement, or improve your overall operational efficiency.....
            </p>
            <button
              data-aos="fade-up"
              className="intro-btn aos-init aos-animate"
            >
              Start a project
              <img
                src={ArrowRightDark}
                alt="arrow-right"
                className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-all duration-150 ease-out"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
