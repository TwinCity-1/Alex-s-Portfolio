import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-2 text-center text-4xl pb-15">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h6 className="mb-2 text-xl font-semibold text-white">
              {project.title}
            </h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-purple-900 px-3 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-purple-700 px-3 py-1.5 text-white hover:bg-purple-800 transition duration-200 text-sm"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
