import { Link } from "lucide-react";
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="relative mx-auto my-3  h-52 sm:h-80 w-50 sm:w-80  lg:w-80 bg-linear-to-b from-white/10 to-blue-950  text-white rounded-xl
            transition-all duration-1000  px-2  py-3 hover:brightness-120  "
    >
      <div className="grid grid-cols-1 space-y-2 gap-4">
        <h3 className="uppercase text-center text:xl sm:text-2xl font-bold text-blue-700 ">
          {project.title}
        </h3>
        <a
          href={project.liveLink}
          target="_blank"
          className="flex justify-center items-center"
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-28 h-16 sm:w-52 sm:h-32  brightness-70 hover:scale-120 transition-transform duration-700 rounded-lg shadow-lg shadow-blue-400 "
          />
        </a>

        <div className="flex justify-evenly gap-2  text-sm sm:text-md">
          <a
            href={project.gitLink}
            target="_blank"
            className="flex justify-between items-center gap-2  rounded-lg  p-1 sm:px-2 sm:py-1 font-bold text-sky-600 ring  shadow-blue-700 bg-black hover:text-black hover:bg-blue-900 transition-all duration-300 "
          >
            Git <SiGithub className="size-4 sm:size-6" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            className=" flex justify-between items-center gap-3  rounded-lg p-1 sm:px-2 sm:py-1 font-bold text-blue-600 bg-black ring hover:text-black  transition-all duration-300 hover:bg-blue-900 "
          >
            Live link <Link className="size-4 sm:size-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
