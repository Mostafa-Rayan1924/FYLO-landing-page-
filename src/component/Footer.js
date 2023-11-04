import { useState } from "react";
import logo from "../images/logo.svg";
const Footer = () => {
  let [links, setLinks] = useState(["About us", "Jobs", "Press", "Blog"]);
  let linksMap = links.map((item) => {
    return (
      <li className="mb-2" key={item}>
        <a className="hover:text-sky-500">{item}</a>
      </li>
    );
  });
  return (
    <div className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container  grid place-items-center  md:place-items-start text-center md:text-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div>
          <img className="mx-auto mb-2" src={logo} />
          <p className="mt-2.5 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            labore repellendus voluptates! ipsa qui at quas, aliquid
          </p>
        </div>
        <div>
          <ul className="mt-16">
            <li className="mb-2">
              <span className="mx-3 text-sky-500 uppercase">tel :</span>
              01156581025
            </li>
            <li>
              <span className="mx-3 text-sky-500 uppercase">ema :</span>
              rayan@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-14">{linksMap}</ul>
        </div>
        <div className="mt-14 flex gap-2">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center  border border-white transition-all duration-300 hover:bg-sky-500">
            f
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center  border border-white transition-all duration-300 hover:bg-sky-500">
            t
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center  border border-white transition-all duration-300 hover:bg-sky-500 ">
            i
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
