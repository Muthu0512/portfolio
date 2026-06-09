import React from "react";
import SkillCard from "../components/SkillCard";
import { FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full mt-48 ">
      <h2 className="text-4xl  text-center my-5 bg-gray-800/50 py-1 ">
        About Me
      </h2>
      <div className="container max-w-6xl min-h-screen mx-auto px-5 py-2 flex flex-col justify-start items-center ">
        <p className="font-semibold text-sm sm:text-lg   shadow-blue-400 shadow-inner rounded-xl overflow-hidden px-4 py-2 bg-blue-400/15 backdrop-blur-sm">
          As a Full-Stack Web Developer, my absolute focus is on building modern
          applications within the MERN ecosystem. I bring the professional
          maturity of over three years in the technical LiDAR analytics field, a
          past career that deeply trained me in data precision and structured
          workflows. Having now fully stepped away from that industry to
          dedicate myself entirely to web development, I leverage my strong
          analytical background to translate complex project requirements into
          clean, scalable, and responsive full-stack solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5  ">
          <SkillCard
            skillset={"Mongo DB"}
            icon={SiMongodb}
            clr="fill-green-600 "
            className="cursor-none"
          />
          <SkillCard
            skillset={"Express. js"}
            icon={SiExpress}
            clr="fill-orange-800"
          />
          <SkillCard
            skillset={"React. js"}
            icon={FaReact}
            clr="fill-blue-500"
          />
          <SkillCard
            skillset={"Node .js"}
            icon={FaNode}
            clr="fill-green-600 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
