"use client";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { DiNodejs } from "react-icons/di";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandGithubFilled,
  TbBrandMongodb,
} from "react-icons/tb";
import { Skills } from "@/interfaces";

type Props = {};

const skills: Skills[] = [
  {
    image: <TbBrandHtml5 className="icons"/>,
    name: "HTML",
    time: "1 year",
  },
  {
    image: <TbBrandCss3 className="icons"/>,
    name: "CSS",
    time: "1 year",
  },
  {
    image: <TbBrandJavascript className="icons"/>,
    name: "JavaScript",
    time: "1 year",
  },
  {
    image: <TbBrandTypescript className="icons"/>,
    name: "TypeScript",
    time: "9 months",
  },
  {
    image: <TbBrandReact className="icons"/>,
    name: "React.js",
    time: "9 months",
  },
  {
    image: <TbBrandReactNative className="icons"/>,
    name: "React Native",
    time: "3 months",
  },
  {
    image: <TbBrandNextjs className="icons"/>,
    name: "Next.js",
    time: "3 months",
  },
  {
    image: <TbBrandGithubFilled className="icons"/>,
    name: "Git",
    time: "9 months",
  },
  {
    image: <TbBrandMongodb className="icons"/>,
    name: "MongoDb",
    time: "3 months",
  },
  {
    image: <DiNodejs className="icons"/>,
    name: "NodeJs",
    time: "3 months",
  },
];

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skills for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill skills={skill} />
        ))}
      </div>
    </motion.div>
  );
}
