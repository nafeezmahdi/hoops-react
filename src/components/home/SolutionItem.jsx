/* eslint-disable react/prop-types */
export default function SolutionItem({ link, id, children }) {
  return (
    <div
      id={id}
      data-aos="fade-up"
      data-aos-delay="0"
      className="grid place-items-center gap-4 p-6 max-w-md mx-auto aos-init aos-animate"
    >
      <img
        src={link}
        alt="Brand &amp; performance advertising"
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 mb-2"
      />
      {children}
    </div>
  );
}

export function SolutionItemTitle({ children }) {
  return (
    <h3 className="text-[#1F253B] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-[18ch] text-center">
      {children}
    </h3>
  );
}

export function SolutionItemText({ children }) {
  return (
    <p className="text-xs sm:text-sm xl:text-base text-center max-w-[28ch]">
      {children}
    </p>
  );
}
