import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/datas.js";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen w-full scroll-mt-12  p-5 ">
      <h1 className="text-center text-3xl font-bold my-5  text-shadow-lg bg-slate-700/30   py-1 ">
        Projects
      </h1>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 ">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
