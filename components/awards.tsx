"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { awardsData } from "@/lib/data";

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-28 max-w-[55rem] w-full mb-28">
      <SectionHeading>Awards & Leadership</SectionHeading>
      <div className="flex flex-wrap justify-center gap-3">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-5 py-3 text-center"
          >
            <p className="font-semibold text-sm">{award.title}</p>
            <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5">
              {award.org} · {award.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
