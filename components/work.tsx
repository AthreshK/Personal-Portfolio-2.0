"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import FeaturedProject from "./feature-project";
import { featuredProjectsData, appsData } from "@/lib/data";
import AppCard from "./app-card";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Work() {
  const { ref } = useSectionInView("Featured Work", 0.35);

  return (
    <section ref={ref} id="work" className="scroll-mt-32">
      <SectionHeading>Featured Work</SectionHeading>
      <div className="max-w-[55rem] flex flex-wrap">
        {featuredProjectsData.map((project, index) => (
          <FeaturedProject
            key={index}
            {...project}
            techStack={[...project.techStack]}
            metrics={project.metrics.map((m) => ({
              value: m.value,
              label: m.label,
            }))}
          />
        ))}
      </div>
      <h3 className="text-2xl font-semibold mb-4 mt-4 text-center">
        Apps I've Built
      </h3>

      <div className="max-w-[55rem] w-full mx-auto">
        <div className="grid grid-cols-1 overflow-hidden">
          <motion.div
            className="flex min-w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: appsData.length * 4, // 4 seconds per app
              repeat: Infinity,
            }}
          >
            <div className="flex flex-nowrap">
              {appsData.map((app, index) => (
                <AppCard key={`first-${index}`} {...app} />
              ))}
            </div>
            <div className="flex flex-nowrap">
              {appsData.map((app, index) => (
                <AppCard key={`second-${index}`} {...app} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
