import SVG_1 from "../../assets/solution-1.svg";
import SVG_2 from "../../assets/solution-2.svg";
import SVG_3 from "../../assets/solution-3.svg";
import SolutionItem, {
  SolutionItemText,
  SolutionItemTitle,
} from "./SolutionItem";

export default function SolutionsSection() {
  return (
    <section className="home-container">
      <div className="container mx-auto px-4 flex flex-col justify-center gap-12 md:gap-16 xl:gap-20 py-10">
        <div className="grid gap-6">
          <h2
            data-aos="fade-up"
            className="inline-block mx-auto text-center aos-init aos-animate"
          >
            Powered to drive optimal results
          </h2>
          <p data-aos="fade-up" className="solution-text aos-init aos-animate">
            Brands &amp; app marketers can find tailor made solutions to reach
            your end user.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionItem link={SVG_1} id="1">
            <SolutionItemTitle>
              Brand & performance advertising
            </SolutionItemTitle>
            <SolutionItemText>
              Enable all funnel acquisition activity for your brand & app
              through
            </SolutionItemText>
          </SolutionItem>
          {/*  */}
          <SolutionItem link={SVG_2} id="2">
            <SolutionItemTitle>Contextualized targeting</SolutionItemTitle>
            <SolutionItemText>
              Reach your users better using our top DMP solutions
            </SolutionItemText>
          </SolutionItem>
          {/*  */}
          <SolutionItem link={SVG_3} id="3">
            <SolutionItemTitle>
              Campaign measurability &amp; analysis
            </SolutionItemTitle>
            <SolutionItemText>
              With machine learning and multiple data end points, we are able to
              draw an...
            </SolutionItemText>
          </SolutionItem>
        </div>
      </div>
    </section>
  );
}
