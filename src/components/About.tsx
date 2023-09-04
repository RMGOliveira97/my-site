"use client";
import { motion } from "framer-motion";
import React from "react";

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

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="md:text-2xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#8E6630]/50">little</span>{" "}
          about me
        </h4>
        <p className="text-xs md:text-sm xl:text-base">
          I'm Rodolfo Oliveira, a charismatic individual from Lisbon, driven by
          a relentless passion for adventure and personal growth. With four
          years of military service, I proudly embodied strength, discipline,
          and an unwavering commitment to duty, carrying the values of courage,
          teamwork, and resilience with me today. Outside of my military
          experience, I am an avid motorcycle enthusiast. The thrill of the open
          road, the wind rushing against my face, and the freedom on two wheels
          provide an exhilarating escape and a sense of boundless freedom. In
          addition to motorcycles, I have a deep love for basketball and
          football. During my high school years, I honed my skills on the
          basketball court, reveling in the fast-paced nature and strategic
          gameplay. Additionally, football holds a special place in my heart, as
          I passionately support my favorite team and immerse myself in the
          excitement of the beautiful game. However, my sporting passions don't
          stop there. Formula 1 also captivates my senses and fuels my
          excitement. The high-speed races, technical precision, and strategic
          battles on the track ignite my passion for this exhilarating
          motorsport. Currently, I am embarking on a new chapter of my life as I
          delve into the world of technology. Pursuing my dream of becoming a
          full stack developer, I am wholeheartedly devoted to refining my
          skills in coding and web development. With an unwavering thirst for
          knowledge, resilience, and an indomitable spirit, I embrace each new
          challenge as an opportunity for growth. I strive for excellence in
          every endeavor, whether it's developing innovative software solutions,
          enjoying thrilling motorcycle rides, engaging in spirited basketball
          matches, cheering on my favorite football team, or immersing myself in
          the exhilarating world of Formula 1.
        </p>
      </div>
    </motion.div>
  );
}
