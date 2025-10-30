"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { articlesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Articles() {
  const { ref } = useSectionInView("Articles", 0.5);

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>Have a read</SectionHeading>
      <div className="flex flex-wrap justify-start gap-4">
        {articlesData.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-800 text-lg font-medium px-4 py-2 rounded-lg hover:bg-gray-200 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 transition-all duration-200"
          >
            <strong>{article.source}: </strong> {article.title}
          </a>
        ))}
      </div>
    </section>
  );
}