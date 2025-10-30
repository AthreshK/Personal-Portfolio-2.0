"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function Education() {
  const { ref } = useSectionInView("Education", 1);

  return (
    <section ref={ref} id="education" className="scroll-mt-32">
      <SectionHeading>My Education</SectionHeading>
      <div className="max-w-[55rem] flex flex-wrap justify-center">
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-full md:w-1/2 p-3"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center mb-3">
                <div
                  className="w-12 h-12 mr-3 relative rounded-lg overflow-hidden p-2 flex-shrink-0"
                  style={{ backgroundColor: "white" }}
                >
                  <Image
                    src={education.logo}
                    alt={`${education.degree} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                    color="white"
                  />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {education.degree}
                  </h2>
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    {education.university}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {education.summary}
              </p>
              <div className="mb-4">
                <h3 className="text-l font-bold text-gray-400 dark:text-white">
                  GPA: {education.gpa}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {education.courses.map((course, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}