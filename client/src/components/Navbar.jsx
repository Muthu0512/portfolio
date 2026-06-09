import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "/mp_logo.svg"
const Navbar = ({ active, setActive }) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  const [isMobileviewOpen, setIsMobileviewOpen] = useState(false);


  function handleActive(item) {
    setActive(item);
    setIsMobileviewOpen(false);
    
    }

  return (
    <div className="max-w-full  bg-slate-900/70 backdrop-blur  border-b-2 border-gray-700  text-gray-500  ">
      <div className=" h-12 sm:h-16 mx-2  px-4 sm:px-8 flex justify-between  items-center gap-6 relative ">
        <div className=" flex  sm:flex-1 items-center justify-between gap-4 ">
        <div className="flex justify-start items-center gap-2 ">
            <a href="#home"  className="size-6 md:size-10">
          <img src={Logo} alt="My logo" className="  rounded-full p-0.5 bg-blue-900 hover:bg-blue-400 transition-colors duration-200" />

          </a>
          <h2  className="text-2xl sm:text-3xl tracking-widest bg-linear-to-r from-emerald-800 via-green-600 to-blue-900 font-bold bg-clip-text text-transparent ">
            MUTHUPANDI
          </h2>
        </div>
        </div>
        {/*desktop view */}
        <div className="hidden sm:flex  items-center gap-1 justify-end  ">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-bold rounded-md hover:cursor-pointer  ${
                active === item.label
                  ? " text-blue-700 border border-blue-300/50   "
                  : "hover:text-blue-400/80"
              }   transition-all duration-150 p-1 `}
              onClick={() => handleActive(item.label)}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/*mobile view */}

        {isMobileviewOpen ? (
          <div className="cursor-pointer block ml-2 sm:hidden transition-all duration-150 hover:scale-130">
            <X
              className="  size-6 "
              onClick={() => setIsMobileviewOpen(() => !isMobileviewOpen)}
            />
          </div>
        ) : (
          <div className="block sm:hidden ml-2 cursor-pointer hover:scale-130 transition-all duration-100">
            <MenuIcon
              className="size-6 "
              onClick={() => setIsMobileviewOpen(() => !isMobileviewOpen)}
            />
          </div>
        )}
        {isMobileviewOpen && (
          <motion.div
            className="absolute -right-4 top-14 w-28 py-3  rounded-md flex flex-col sm:hidden items-center gap-2  text-sm justify-between  bg-gray-800/90 backdrop-blur-lg z-50 "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: -10 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={` hover:cursor-pointer  ${
                  active === item.label
                    ? " text-emerald-600 font-bold   "
                    : "text-gray-300/80 hover:text-gray-500 transition-colors duration-150 font-light"
                }   transition-all duration-150  `}
                onClick={() => handleActive(item.label)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
