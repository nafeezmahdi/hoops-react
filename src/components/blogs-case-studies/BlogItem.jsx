/* eslint-disable react/prop-types */
export default function BlogItem({ date, title, intro, image }) {
  return (
    <a
      href="#/blogs/65ddba1d8991c15bc99fdcd6"
      className="bg-white p-8 grid grid-cols-[2fr,1fr] items-center gap-10"
    >
      <div className="grid gap-4 items-center">
        <p className="uppercase text-[#667085] font-medium">{date}</p>
        <h4 className="font-semibold text-[#1D2939]">{title} </h4>
        <p>{intro}</p>
      </div>
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover max-h-40"
        />
      </div>
    </a>
  );
}
