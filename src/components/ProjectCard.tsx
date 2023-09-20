import { Projects } from "@/interfaces";
import React from "react";

type Props = { project: Projects };

export default function ProjectCard({ project }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <a href={project.link} target="_blank">
          <h4 className="text-4xl font-semibold text-center">{project.name}</h4>
          <div className="flex space-x-2 my-2 items-center justify-center">
            {project.tech}
          </div>

          <p className="text-lg text-center md:text-left">
            {project.description}
          </p>
        </a>
      </div>
    </div>
  );
}
