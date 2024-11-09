import MissionImage from "../../assets/image/mission.png";

export default function AboutVision() {
  return (
    <section className="about-container">
      <div className="container mx-auto px-4 grid gap-8 lg:gap-20 lg:grid-cols-2 items-center">
        <div className="grid gap-10 lg:gap-20 lg:place-items-start place-items-center">
          <div className="grid gap-10 lg:place-items-start place-items-center">
            <h3
              data-aos="fade-up"
              className="vision-title aos-init aos-animate"
            >
              Our Mission
            </h3>
            <p data-aos="fade-up" className="vision-text aos-init aos-animate">
              Curate multi-layered top of the line solutions &amp; products (via
              proprietary &amp; reseller model), to aid our clients solve for
              immediate &amp; future challenges in the ever-changing ad-tech
              realm.
            </p>
          </div>
          <div className="grid gap-10 lg:place-items-start place-items-center">
            <h3 data-aos="fade-up" className="vision-title aos-init">
              Our Vission
            </h3>
            <p data-aos="fade-up" className="vision-text aos-init">
              We aim to empower marketers by enabling them to take intelligent
              decisions with ease.
            </p>
          </div>
        </div>
        <div>
          <img
            src={MissionImage}
            alt=""
            data-aos="fade-up"
            className="w-full h-full object-cover max-h-[45rem] object-center aos-init aos-animate"
          />
        </div>
      </div>
    </section>
  );
}
