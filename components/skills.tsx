"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { coreExpertise, proficientWith, toolsAndMethods } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillSection = ({ title, skills }: { title: string; skills: readonly string[] }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
    <ul className="flex flex-wrap justify-center gap-2">
      {skills.map((skill, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[55rem] scroll-mt-32 text-center"
    > 
      <SkillSection title="Core Expertise" skills={coreExpertise} />
      <SkillSection title="Proficient With" skills={proficientWith} />
      <SkillSection title="Tools & Methods" skills={toolsAndMethods} />
    </section>
  );
}
