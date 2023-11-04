import logo from "../images/logo.svg";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  let [links, setLinks] = useState(["Features", "About", "Contact us"]);
  let headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0px";
      }
    });
  }, []);
  let linksEle = links.map((li) => {
    return (
      <li key={li}>
        <a className="cursor-pointer transition-all duration-300 hover:opacity-80 hover:underline">
          {li}
        </a>
      </li>
    );
  });
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 z-50 w-full transition-all duration-300">
      <div className="container flex justify-center gap-y-5 sm:justify-between items-center flex-wrap">
        <img src={logo} />
        <ul className="flex items-center text-white gap-10">{linksEle}</ul>
      </div>
    </header>
  );
};

export default Header;
