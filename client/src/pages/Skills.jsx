import {
  FaHtml5,
  FaReact,
  FaJsSquare,
  FaNode,
  FaStripe,
  FaCss3,
  
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
 SiGit,SiGithub,
 SiRender,
  SiCloudinary,
  SiRedis,
  SiPostman,
  SiVercel
} from "react-icons/si";

import SkillCard from "../components/SkillCard";


const Skills = () => {
  return (
    <div id="skills" className="min-h-screen w-screen scroll-mt-16 ">
      <div className="flex flex-col gap-4  items-center justify-between w-full h-full  px-5 space-y-4">
        <section className="container max-w-7xl flex flex-col gap-4 justify-between items-center text-center " >
          <h3 className="my-4 text-4xl bg-linear-to-r from-red-700 via-blue-600 to-blue-600 bg-clip-text text-transparent">
            FrontEnd
          </h3>
          <div className="grid grid-cols-2 w-2/3 sm:grid-cols-3 md:grid-cols-4  ">
            <SkillCard skillset={"Html"} icon={FaHtml5} clr="fill-orange-600" />
            <SkillCard skillset={"Css"} icon={FaCss3} clr="fill-violet-600" />
            <SkillCard  skillset={"Java Script"} icon={FaJsSquare} clr="fill-amber-500" />
             <SkillCard skillset={"Tailwind CSS"} icon={SiTailwindcss} clr="fill-sky-600" />
             <SkillCard skillset={"React . js"} icon={FaReact} clr="fill-blue-600" />
          </div>
        </section>
        <section className="container max-w-7xl flex flex-col gap-4 justify-between items-center text-center" >
          <h3 className="my-4 text-4xl bg-linear-to-r from-red-700 via-blue-600 to-blue-600 bg-clip-text text-transparent">
            Backend and Database
          </h3>
          <div className="grid grid-cols-2 w-2/3 sm:grid-cols-3 md:grid-cols-4  ">
            <SkillCard skillset={"Node .js"} icon={FaNode} clr="fill-green-600" />
            <SkillCard skillset={"Express .js"} icon={SiExpress} clr="fill-red-600" />
            <SkillCard  skillset={"Mongo DB"} icon={SiMongodb} clr="fill-green-600"/>
            
          </div>
        </section>
        <section className="container max-w-7xl flex flex-col gap-4 justify-between items-center text-center" >
          <h3 className="my-4 text-4xl bg-linear-to-r from-red-700 via-blue-600 to-blue-600 bg-clip-text text-transparent">
            Tools
          </h3>
          <div className="grid grid-cols-2 w-2/3 sm:grid-cols-3 md:grid-cols-4  ">
            <SkillCard skillset={"Postman"} icon={SiPostman} clr="fill-orange-600"  />
            <SkillCard skillset={"Git"} icon={SiGit} clr="fill-orange-700" />
            <SkillCard skillset={"Github"} icon={SiGithub} clr="fill-white" />
            <SkillCard skillset={"Render"} icon={SiRender} clr="fill-violet-600" />
            <SkillCard  skillset={"Redis"} icon={SiRedis} clr="fill-red-600"/>
            <SkillCard  skillset={"Stripe"} icon={FaStripe} clr="fill-fuchsia-600" className="bg-"/>
            <SkillCard  skillset={"Cloudinary"} icon={SiCloudinary} clr="fill-teal-600"/>
            <SkillCard  skillset={"Vercel"} icon={SiVercel} clr="fill-black bg-white rounded-full p-2"/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
