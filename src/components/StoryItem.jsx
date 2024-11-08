/* eslint-disable react/prop-types */
import ClockSVG from "../assets/clock.svg";

export default function StoryItem({
  link,
  image,
  date,
  title,
  time,
  personImage,
  personName,
}) {
  return (
    <a
      data-aos="fade-up"
      data-aos-delay="0"
      href={link}
      className="block aos-init"
    >
      <div className="story-item">
        <div className="w-full h-full max-h-[16rem] md:max-h-[18rem] rounded-b-lg overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="grid gap-4 p-4">
          <div className="flex justify-between items-center gap-4">
            <p className="text-[#908E8E] text-xs md:text-sm font-semibold">
              {date}
            </p>
            <div className="flex gap-2 items-center">
              <img
                src={ClockSVG}
                alt="clock icon"
                className="h-[0.875rem] w-[0.875rem] md:w-4 md:h-4"
              />
              <p className="text-[#908E8E] text-xs md:text-sm font-semibold">
                {time}
              </p>
            </div>
          </div>
          <h3 className="text-base md:text-xl font-semibold text-[#212121] line-clamp-2">
            {title}{" "}
          </h3>
          <div className="flex gap-2 md:gap-4 items-center pb-2">
            <img
              src={personImage}
              alt={personName}
              className="h-6 w-6 md:w-8 md:h-8 rounded-full object-cover"
            />
            <p className="text-xs md:text-sm font-semibold text-[#212121]">
              {personName}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
