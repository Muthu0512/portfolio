import React, { useState } from "react";  
import { Download } from "lucide-react";
import TypeWriter from "typewriter-effect"

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-screen relative scroll-mt-16 "
    >
      <div className="  min-h-screen w-screen flex flex-col sm:flex-row justify-evenly  items-center  sm:px-12 mt-10 text-center">
        <div className="relative z-0 ">
          <h1 className="text-xl mb-4 ">
            I'm{" "}
            <span className=" text-3xl sm:text-5xl tracking-widest text-shadow-blue-400 text-shadow-lg">
              Muthupandi
            </span>
          </h1>
          

          <TypeWriter   options={{strings:["MERN Stack Developer","Full Stack Developer"],autoStart:true,loop:true,delay:100,deleteSpeed:10,devMode:false,cursorClassName:"text-green-500 text-xl",wrapperClassName:"text-emerald-600 text-xl"}}/>
            <div className="flex gap-12 mt-5">
            <a href="#contact" className=" bg-linear-to-r from-blue-900/20 to-blue-600/80 rounded-md px-3 py-1 hover:bg-blue-500 hover:cursor-pointer transition-all duration-150 hover:ring-2 hover:ring-blue-400">
              Contact Me
            </a>
            <a href="/Muthupandi S.pdf" download={"Muthupandi S.pdf"}
              className="flex  gap-2  font-semibold rounded-md px-3 py-1  bg-linear-to-r from-blue-400/25  to-white/80 border border-blue-900 hover:cursor-pointer  text-black transition-all duration-150 group">
              Resume <Download className=" size-7 group-hover:translate-y-0.5 group-active:translate-y-1 transition-all duration-100" />
            </a>
          </div>
        </div>
        <div className="flex ">
          <img
            className=" size-48 sm:size-64 md:size-80 rounded-full shadow-2xl shadow-blue-500/50  object-cover  brightness-80 hover:rotate-360 transition-transform duration-5000 cursor-progress  "
            src={"/Muthu6.png"}
            alt="MP"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
