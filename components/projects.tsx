"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import FeaturedProject from "./feature-project";
import { featuredProjectsData } from "@/lib/data";
import { appsData } from "@/lib/apps-data";
import AppCard from "./app-card";

import { motion, useAnimation } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const controls = useAnimation();

  React.useEffect(() => {
    // start the looping horizontal animation on mount
    controls.start(
      { x: ["0%", "-100%"] },
      { ease: "linear", duration: 20, repeat: Infinity }
    );
  }, [controls]);

  const startLoop = () => {
    controls.start(
      { x: ["0%", "-100%"] },
      { ease: "linear", duration: 20, repeat: Infinity }
    );
  };

  const stopLoop = () => {
    controls.stop();
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-32">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Featured Case Studies
      </h3>
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
    </section>
  );
}
