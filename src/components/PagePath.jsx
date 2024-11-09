/* eslint-disable react/prop-types */

export default function PagePath({ page }) {
  return (
    <div className="bg-[#FBF9F1]">
      <div className="container mx-auto px-4 py-4 flex gap-2 items-center">
        <a
          href="#/"
          className=" text-[#000000] inline-block
            last:text-[#3C4245] font-medium last:font-bold text-xs md:text-sm last:text-sm md:last:text-base last:hover:text-[#927a7a] hover:text-[#534343]
          "
        >
          <span>Home</span> <span> &gt;</span>
        </a>
        <a
          href="#/blogs"
          className=" text-[#000000] inline-block
            last:text-[#3C4245] font-medium last:font-bold text-xs md:text-sm last:text-sm md:last:text-base last:hover:text-[#927a7a] hover:text-[#534343]
          "
        >
          <span>{page}</span> <span> </span>
        </a>
      </div>
    </div>
  );
}
