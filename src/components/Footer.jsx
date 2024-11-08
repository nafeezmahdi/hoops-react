/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";
import { footerSVG, products, solutions } from "../data/data";

export default function Footer() {
  const solutionsItems = solutions;
  const productsItems = products;
  const SVGItems = footerSVG;

  return (
    <section className="py-10 sm:py-12 md:py-14 xl:py-16 2xl:py-20 bg-[#282828] !pb-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr,1fr,1fr]">
          <div className="grid gap-6 place-content-center lg:place-content-start justify-center lg:justify-start">
            <a
              href="/"
              className="flex justify-center lg:justify-start items-center 
            
    "
            >
              <img
                src={Logo}
                alt="company logo"
                data-aos="fade-up"
                className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full object-cover hover:scale-125 transition-all duration-200 aos-init"
              />
            </a>
            <p
              data-aos="fade-up"
              className="text-[#727272] max-w-[35ch] text-xs sm:text-sm md:text-base xl:text-lg text-center lg:text-left hover:text-white transition-colors duration-200 md:hover:scale-105 aos-init"
            >
              It always seems impossible until it is done
            </p>
          </div>
          <ItemSection section={solutionsItems} />
          <ItemSection section={productsItems} />
          <div className="grid gap-8 place-content-start justify-center lg:justify-start">
            <div className="grid gap-4 lg:gap-6 justify-center lg:justify-start place-items-center lg:place-items-start place-content-start">
              <h4 className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left">
                Blogs &amp; Resources
              </h4>
              <ContactItems />
            </div>
            <ul className="grid gap-4 grid-cols-4 place-items-center lg:place-items-start">
              {SVGItems.map((item) => (
                <SocialItem
                  key={item.name}
                  link={item.link}
                  image={item.image}
                  name={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
        <CopyRight />
      </div>
    </section>
  );
}

function ItemSection({ section }) {
  const { title, items } = section;

  return (
    <div className="grid gap-4 lg:gap-6 justify-center lg:justify-start place-items-center lg:place-items-start place-content-start">
      <h4 className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left">
        {title}
      </h4>
      <ul className="grid gap-3 lg:gap-4 place-items-center lg:place-items-start">
        {items.map((item) => (
          <Item key={item.text} link={item.link} itemText={item.text} />
        ))}
      </ul>
    </div>
  );
}

function Item({ link, itemText }) {
  return (
    <li className="text-[#959595] text-xs sm:text-sm md:text-base xl:text-lg text-center lg:text-left hover:text-white transition-colors duration-200 md:hover:scale-110 aos-init">
      <Link to={link}>{itemText}</Link>
    </li>
  );
}

function ContactItems() {
  return (
    <ul className="grid gap-3 lg:gap-4 place-items-center lg:place-items-start">
      <li className="text-[#959595] text-xs sm:text-sm md:text-base xl:text-lg text-center lg:text-left hover:text-white transition-colors duration-200 md:hover:scale-110 aos-init">
        <a href="tel:+9718044400200">+00000000000</a>
      </li>
      <li className="text-[#959595] text-xs sm:text-sm md:text-base xl:text-lg text-center lg:text-left hover:text-white transition-colors duration-200 md:hover:scale-110 aos-init">
        <a href="mailto:business@juuuno.com">business@hoops.com</a>
      </li>
    </ul>
  );
}

function SocialItem({ link, image, name }) {
  return (
    <li className="aos-init">
      <Link
        to={link}
        className="flex justify-center items-center h-6 w-6 xl:w-8 xl:h-8 rounded-full bg-[#FDEAB7] hover:bg-[#f0ecec] transition-all duration-200
hover:scale-105 transform hover:shadow-md hover:shadow-zinc-200 md:hover:scale-110 md:hover:shadow-md md:hover:shadow-zinc-200
"
      >
        <img
          src={image}
          alt={name}
          className="w-4 h-4 xl:w-5 xl:h-5 object-contain"
        />
      </Link>
    </li>
  );
}

function CopyRight() {
  return (
    <>
      <div className="h-[1px] w-full bg-[#EDEBE8] my-8 xl:my-10 2xl:my-14"></div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center items-center ">
        <p className="text-[#9D9D9D] hover:text-white transition-all duration-100 text-xs sm:text-sm lg:text-base text-center lg:text-left md:hover:scale-110">
          © Copyright N.M.
        </p>
      </div>
    </>
  );
}
