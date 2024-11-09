import SearchFilter from "./SearchFilter";
import SearchInput from "./SearchInput";

export default function StudiesContent() {
  return (
    <section className="bnc-container bg-[#F9F8F3]">
      <div className="container mx-auto px-4 grid gap-4">
        <SearchInput />
        <div className="flex gap-4 flex-wrap">
          <SearchFilter searchText="ssvdsvs" />
        </div>
        <div className="grid gap-4 mt-8"></div>
        <div>
          <h4 className="text-center text-[#667085]">
            No more case studies to show.
          </h4>
        </div>
      </div>
    </section>
  );
}
