"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "@/interfaces";
import { DiNodejs } from "react-icons/di";
import {
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandGithubFilled,
  TbBrandTailwind,
} from "react-icons/tb";

type Props = {};

export default function Projects({}: Props) {
  const projects: Projects[] = [
    {
      link: "https://github.com/RMGOliveira97/shopping-list",
      name: "Shoping List",
      tech: [
        <TbBrandCss3 className="project-icons" />,
        <TbBrandReact className="project-icons" />,
        <TbBrandGithubFilled className="project-icons" />,
      ],
      description:
        "A simple shopping site with several products and the possibility to add them to the cart to make a final total, created with React and Sccs",
    },
    {
      link: "https://github.com/RMGOliveira97/Project.React.NLW",
      name: "Time Capsule",
      tech: [
        <TbBrandTypescript className="project-icons" />,
        <TbBrandNextjs className="project-icons" />,
        <TbBrandReactNative className="project-icons" />,
        <TbBrandTailwind className="project-icons" />,
        <DiNodejs className="project-icons" />,
        <TbBrandGithubFilled className="project-icons" />,
      ],
      description:
        "A website built to be a time capsule to save memories and be able to share them with others is built on three fronts: the web, mobile, and backend. With next. js, reactnative, nodejs, and tailwind.",
    },
  ];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
