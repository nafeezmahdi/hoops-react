import AudioImage from "../../assets/image/audio.jpg";
import TapImage from "../../assets/image/tap.png";
import StoryItem from "../StoryItem";

export default function StoriesSection() {
  return (
    <section className="home-container bg-[#FBF9F1]">
      <div className="container mx-auto px-4 flex flex-col justify-center gap-12 md:gap-16 xl:gap-20">
        <h2 className="inline-block mx-auto text-center">Read Our Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:grid-cols-4">
          <StoryItem
            link=""
            image={AudioImage}
            date="Feb 12, 2024"
            title="Collaborates with Audiomob"
            time="1 minute to read"
            personImage={TapImage}
            personName="N.M."
          />
          <StoryItem
            link=""
            image={AudioImage}
            date="Feb 12, 2024"
            title="Collaborates with Audiomob"
            time="1 minute to read"
            personImage={TapImage}
            personName="N.M."
          />
        </div>
      </div>
    </section>
  );
}
