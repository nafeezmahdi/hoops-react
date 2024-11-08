import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Youtube from "../assets/youtube.svg";

// footer data
export const solutions = {
  title: "Solutions",
  items: [
    { text: "Home", link: "/home" },
    { text: "Features", link: "/resources" },
    { text: "FAQs", link: "/resources" },
    { text: "Reviews Stories", link: "/blogs" },
  ],
};

export const products = {
  title: "Products",
  items: [
    { text: "Privacy", link: "/resources" },
    { text: "Policy", link: "/resources" },
    { text: "Payment", link: "/resources" },
    { text: "Terms", link: "/resources" },
  ],
};

export const footerSVG = [
  { name: "Facebook", link: "http://facebook.com", image: Facebook },
  { name: "Twitter", link: "http://twitter.com", image: Twitter },
  { name: "Youtube", link: "http://youtube.com", image: Youtube },
  { name: "LinkedIn", link: "https://www.linkedin.com", image: LinkedIn },
];
