"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 max-w-[55rem] w-full">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl p-5 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-base">{project.title}</h3>
              {project.status && (
                <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 transition-colors"
              >
                View publication →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
