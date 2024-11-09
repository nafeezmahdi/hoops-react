import ContactForm from "./ContactForm";

export default function OnlineContact() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-1 place-items-center lg:place-items-start">
        <h4 className="font-semibold text-[#3C4245] text-center lg:text-left">
          Leave a message
        </h4>
        <p className="text-xs sm:text-sm md:text-base xl:text-lg font-normal text-center lg:text-left">
          Get in touch with us
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
