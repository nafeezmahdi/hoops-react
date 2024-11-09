export default function MailSection() {
  return (
    <section className="home-container bg-contact bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-4 flex flex-col justify-center gap-8 md:gap-10 xl:gap-10 py-10">
        <div className="grid gap-4">
          <p data-aos="fade-up" className="mail-title aos-init aos-animate">
            Get Started
          </p>
          <h2
            data-aos="fade-up"
            className="inline-block mx-auto text-white max-w-[30ch] text-center aos-init aos-animate"
          >
            Enter your email address and get started for free
          </h2>
        </div>
        <form data-aos="fade-up" className="mail-form aos-init aos-animate">
          <input
            type="email"
            placeholder="Enter your email"
            required=""
            name="email"
            className="py-2 px-2 sm:py-4 sm:px-2 text-[#908E8E] text-xs md:text-sm lg:text-base font-medium"
          />
          <button className="mail-btn">Get Started</button>
        </form>
      </div>
    </section>
  );
}
