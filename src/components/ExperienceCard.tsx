import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Job } from "../interfaces";

type Props = { jobs: Job };

export default function ExperienceCard({ jobs }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#333333] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={jobs.image}
          alt={jobs.company}
          width={96}
          height={96}
          className="w-24 h-24 rounded-full md:rounded-full xl:w-32 xl:h-32 object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobs.title}</h4>
        <p className="font-bold text-2xl mt-1">{jobs.company}</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">{jobs.time}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>{jobs.funcions[0]}</li>
          <li>{jobs.funcions[1]}</li>
        </ul>
      </div>
    </article>
  );
}
