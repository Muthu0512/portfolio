import React from "react";
import { Icon } from "lucide-react";
import { motion } from "framer-motion";

const SkillCard = ({ skillset, icon: Icon, clr }) => {
  return (
    <div className="mt-5 mx-auto w-20 sm:w-24 h-24 sm:h-32 relative shadow-sm shadow-blue-500 bg-gray-800/30 rounded-lg cursor-pointer hover:scale-110 transition-all duration-500 group">
      <div className="flex flex-col px-auto gap-2 justify-center items-center px-4 py-3  ">
        <Icon className={`size-6  sm:size-12 ${clr} group-hover:-translate-y-3 rounded-lg  transition-all duration-1000 `}/>
        <p className="uppercase text-xs sm:text-sm text-shadow-lg bg  text-shadow-black text-blue-900 font-bold">
          {skillset}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
