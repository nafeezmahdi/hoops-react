import BlogItem from "./BlogItem";
import SearchInput from "./SearchInput";
import SearchFilter from "./SearchFilter";
import AudioImage from "../../assets/image/audio.jpg";

export default function BlogsContent() {
  return (
    <section className="bnc-container bg-[#F9F8F3]">
      <div className="container mx-auto px-4 grid gap-4">
        <SearchInput />
        <div className="flex gap-4 flex-wrap">
          <SearchFilter searchText="ssvdsvs" />
        </div>
        <div className="grid gap-4 mt-8">
          <BlogItem
            date="February 27, 2024"
            title="Collaborates with Audiomob"
            intro="Audiomob partners with Hoops to bring innovative audio advertising
             solutions to India market"
            image={AudioImage}
          />
        </div>
      </div>
    </section>
  );
}
