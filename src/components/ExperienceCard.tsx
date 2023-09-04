import React from "react";
import Image from "next/image";
import logoFap from "../assets/logoFap.png";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#333333] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={logoFap}
          alt={"FAP"}
          className="w-24 h-24 rounded-full md:rounded-full xl:w-32 xl:h-32 object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Military Police</h4>
        <p className="font-bold text-2xl mt-1">Portuguese Air Force</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Nov 2018 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Security of FAPs air and ground resources</li>
          <li>Monitoring of senior entities</li>
        </ul>
      </div>
    </article>
  );
}
