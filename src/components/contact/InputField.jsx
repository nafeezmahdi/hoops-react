/* eslint-disable react/prop-types */
export default function InputField({ type, labelText, placeholder }) {
  return (
    <div className="grid gap-2">
      <label htmlFor="P0-0" className="text-xs md:text-sm xl:text-base">
        {labelText}
      </label>
      {type === "input" && (
        <input id="P0-0" placeholder={placeholder} className="contact-input" />
      )}
      {type === "textarea" && (
        <textarea
          id="P0-3"
          placeholder={placeholder}
          rows="4"
          className="contact-input"
        ></textarea>
      )}
    </div>
  );
}
