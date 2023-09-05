"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import myPhoto from "../assets/MyPhoto.png";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      {/* <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={myPhoto}
          alt={"My photo"}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
      </motion.div> */}
      <div className="absolute space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold text-center">
          Here is a{" "}
          <span className="underline decoration-[#8E6630]/50">little</span>{" "}
          about me
        </h4>
        <p className="text-sm">
          I'm Rodolfo Oliveira, and I'm a passionate traveler and adventure
          enthusiast. Exploring the world's diverse cultures and landscapes has
          been a lifelong love of mine, and I've been fortunate to visit
          countless destinations. Riding motorcycles on scenic roads is another
          thrill I cherish. Sports play a big role in my life, with a deep
          passion for soccer and Formula 1 racing. I'm an avid follower of
          football matches and Formula 1 races, and the excitement of these
          sports never fails to captivate me. Back in high school, I played
          basketball, and it left me with a lasting appreciation for the
          game.Currently, I'm embarking on a new journey in the world of
          technology. My dream is to become a full-stack developer, and I'm
          wholeheartedly dedicated to honing my coding and web development
          skills. I approach each challenge as an opportunity for growth,
          striving for excellence in everything I do, whether it's crafting
          innovative software solutions, enjoying thrilling motorcycle rides,
          engaging in spirited basketball matches, cheering on my favorite
          football team, or immersing myself in the exhilarating world of
          Formula 1.
        </p>
      </div>
    </motion.div>
  );
}
