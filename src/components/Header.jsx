/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/image/logo.png";
import { useEffect, useState } from "react";

export default function Header() {
  const solutions = [
    { id: 1, title: "Blogs", link: "/blogs" },
    { id: 2, title: "Case Studies", link: "/case-studies" },
  ];

  return (
    <header className="bg-white py-3 md:py-4 px-4 sticky z-[1000]">
      <div className="container mx-auto grid grid-cols-2 justify-between md:grid-cols-[auto,1fr] md:gap-4">
        <Link
          to="/"
          className="flex justify-start items-center md:hover:scale-[1.4] transition-all duration-100 ease-in-out origin-center"
        >
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full object-cover"
          />
        </Link>
        <div className="flex justify-center items-center row-start-2 col-span-2 md:row-start-1 md:col-start-2">
          <ul className="w-full gap-4 max-h-0 overflow-hidden md:w-auto md:flex md:justify-center md:items-center md:overflow-visible md:max-h-none transition-all duration-300 ease-out ">
            <NavItem title="Home" link="/home" />
            <NavItemMenu title="Solutions" menu={solutions} />
            <NavItem title="About Us" link="/about-us" />
            <NavItem title="Contact Us" link="/contact-us" />
          </ul>
        </div>
      </div>
    </header>
  );
}

function NavItem({ title, link }) {
  const location = useLocation();
  const blod =
    location.pathname === link ||
    (location.pathname === "/" && link === "/home")
      ? "font-bold"
      : "";

  return (
    <li className="relative w-full">
      <Link
        to={link}
        className={`inline-block px-4 py-2 text-sm sm:text-base xl:text-lg w-full md:w-auto transition-all duration-100 ease-in-out hover:font-semibold min-w-32 md:hover:scale-105 ${blod}`}
      >
        {title}
      </Link>
    </li>
  );
}

function NavItemMenu({ title, menu }) {
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsShow(false);
  }, [location]);

  return (
    <li className="relative cursor-pointer">
      <div
        className={`px-4 py-2 text-sm sm:text-base xl:text-lg w-full md:w-auto transition-all duration-100 ease-in flex justify-between items-center border-b-0 md:hover:scale-105 ${
          isShow ? "!border-b-[1px] border-[#EEEAEA] font-bold" : ""
        }`}
        onClick={() => setIsShow(!isShow)}
      >
        <span>{title}</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block ml-2 transition-all duration-100 ease-in-out transform ${
            isShow ? "rotate-180" : ""
          }`}
        >
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </div>
      <ul className="px-4 md:px-2 md:absolute md:top-full md:rounded-md md:shadow-xl md:left-0 md:min-w-[15rem] w-full bg-white z-[1000] transition-all duration-75 ease-out md:items-center gap-4 overflow-hidden max-h-[10030rem] md:pt-0 py-2">
        {isShow &&
          menu.map((item) => (
            <NavItem title={item.title} link={item.link} key={item.id} />
          ))}
      </ul>
    </li>
  );
}
