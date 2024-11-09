import DirectContact from "./DirectContact";
import OnlineContact from "./OnlineContact";

export default function ContactContent() {
  return (
    <section className="bg-[#F9F8F3] py-10">
      <div className="contact-content">
        <DirectContact />
        <OnlineContact />
      </div>
    </section>
  );
}
