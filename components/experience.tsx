"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(media.matches);
    const listener = () => {
      setIsLargeScreen(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 max-w-[55rem] overflow-hidden"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" layout="1-column" animate={isLargeScreen}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="!font-bold"
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgb(29, 36, 51)",
                fontSize: "1.5rem",
              }}
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold capitalize">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold !mt-1">{item.location}</p>
              </div>
              <ul className="list-disc md:pl-6 mt-2">
                {item.description.map((point, idx) => (
                  <li key={idx} className="mb-2 text-sm dark:text-white/75">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
