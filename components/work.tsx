"use client";

import React, { useEffect, useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import FeaturedProject from "./feature-project";
import { featuredProjectsData, appsData } from "@/lib/data";
import AppCard from "./app-card";

import { motion, useMotionValue } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Work() {
  const { ref } = useSectionInView("Featured Work", 0.35);
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const lastTimeRef = useRef<number>();
  const animRef = useRef<number>();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (!isDragging.current && trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        const speedPxPerMs = halfWidth / (appsData.length * 4 * 1000);
        if (lastTimeRef.current !== undefined) {
          const delta = time - lastTimeRef.current;
          let next = x.get() - speedPxPerMs * delta;
          if (next <= -halfWidth) next += halfWidth;
          x.set(next);
        }
      }
      lastTimeRef.current = time;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

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
        <div className="grid grid-cols-1 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={trackRef}
            className="flex min-w-max"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -9999, right: 0 }}
            dragElastic={0.05}
            dragMomentum={false}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { isDragging.current = false; lastTimeRef.current = undefined; }}
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
