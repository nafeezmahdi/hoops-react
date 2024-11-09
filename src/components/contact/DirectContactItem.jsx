/* eslint-disable react/prop-types */

export default function DirectContactItem({ itemSVG, contactType, byContact }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-3 items-center lg:items-start">
      {/* {itemSVG} */}
      <img
        src={itemSVG}
        alt={contactType}
        className="w-6 h-6 md:w-10 md:h-10 lg:w-6 lg:h-6 mt-1"
      />
      <div className="grid gap-2 place-items-center lg:place-items-start">
        <h4 className="text-[#3C4245] font-semibold text-center lg:text-left">
          {contactType}
        </h4>
        <p className="text-[#3C4245] text-xs md:text-base xl:text-lg max-w-[24ch] text-center lg:text-left">
          {byContact}
        </p>
      </div>
    </div>
  );
}
