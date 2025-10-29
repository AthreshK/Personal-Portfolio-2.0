"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { aboutMeData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {aboutMeData.map((paragraph, index) => (
        <p key={index} className="mb-4 last:mb-0 text-justify">
          <MarkdownText text={paragraph} />
        </p>
      ))}
    </motion.section>
  );
}

function MarkdownText({ text }: { text: string }) {
  // Regex to find text wrapped in **...**
  const regex = /(\*\*)(.*?)\1/g;
  
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        
        if (index % 3 === 2) {
          return <strong key={index} className="font-bold text-xl">{part}</strong>;
        }
        if (part === '**') {
          return null;
        }
        return part;
      })}
    </>
  );
}
