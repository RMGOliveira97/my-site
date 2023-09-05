"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import logoFap from "../assets/logoFap.png";
import logoBrico from "../assets/logoBrico.png";
import { Job } from "../interfaces";

const jobs: Job[] = [
  {
    image: { logoFap },
    title: "Military Police",
    company: "Portuguese Air Force",
    time: "Nov 2018 - Present",
    funcions: [
      "Security of FAPs air and ground resources",
      "Monitoring of senior entities",
    ],
  },
  {
    image: { logoBrico },
    title: "Store Collaborator",
    company: "Brico Depot",
    time: "Jan 2017 - Jan 2018",
    funcions: [
      "Customer Service",
      "Sales assistant",
      "Detailing of the Sales Process",
    ],
  },
];

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {jobs.map((job) => (
          <ExperienceCard jobs={job} />
        ))}
      </div>
    </motion.div>
  );
}
