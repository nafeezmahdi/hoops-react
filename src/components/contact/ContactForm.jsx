import InputField from "./InputField";

export default function ContactForm() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          type="input"
          labelText="First Name"
          placeholder="Enter your first name"
        />
        <InputField
          type="input"
          labelText="Last Name"
          placeholder="Enter your last name"
        />
      </div>
      <InputField
        type="input"
        labelText="Email"
        placeholder="Enter your email"
      />
      <InputField
        type="textarea"
        labelText="Message"
        placeholder="Enter your message"
      />
      <div className="flex justify-center items-center mt-4">
        <button type="submit" className="contact-btn">
          Send My Message
        </button>
      </div>
    </form>
  );
}
