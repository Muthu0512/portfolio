import React from "react";
import { ArrowUp } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="w-full bg-slate-900/60 border-t border-blue-900/60 backdrop-blur-md py-3 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm flex-1 sm:text-md text-gray-400 font-bold order-3 sm:order-1 text-center sm:text-left hover:underline hover:underline-offset-2 hover:brightness-200">
          &copy; {currentYear}  Muthupandi. All rights reserved.
        </div>

        <div className="flex items-center gap-6 order-1 sm:order-2">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 ">
            <a
              href="tel:+917502033862"
              aria-label="Phone"
              className="hover:text-green-500/50 transition-colors flex flex-col items-center justify-center gap-2"
            >
              <FaPhone className="size-4 rotate-180" />
              <span>+91 7502033862</span>
            </a>{" "}
            <a
              href="mailto:muthupandi5199.desk@gmail.com"
              aria-label="Email"
              className="hover:text-blue-400 transition-colors flex sm:flex-col items-center justify-between gap-2"
            >
              <SiGmail className="size-4 " />
              <span>muthupandi5199.desk@gmail.com</span>
            </a>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-blue-400 transition-colors group cursor-pointer order-2 sm:order-3  "
        >
          <span className="">Back to Top</span>
          <div className="p-1.5 rounded-full bg-slate-900 border border-slate-800 group-hover:border-blue-500 group-hover:bg-blue-950/30 transition-all duration-300">
            <ArrowUp className="size-4 text-gray-300 group-hover:text-blue-400 group-hover:-translate-y-0.5  transition-all" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
