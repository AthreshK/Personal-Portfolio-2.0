import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const pageMetaData = {
  title: "Athresh | Personal Portfolio",
  description: "Founding Engineer & Mobile SDE with 4 years of experience specializing in Full-Stack, Mobile, AI & Cloud Engineering",
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const displayPictureData = {
  src: "https://lh3.googleusercontent.com/d/1McqXmhXSMrNlQ4zeE4eZucdE7dKnxIAJ",
  alt: "Athresh portrait",
} as const;

export const introData = {
  name: "Athresh Kiran",
  title: "Mobile SDE & Founding Engineer",
  roleTitle: "Flutter, Cloud & AI-driven Solutions",
} as const;

export const socialLinks = [
  {
    name: "Email",
    url: "athreshkiran@example.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/athreshkiran/",
  },
  {
    name: "GitHub",
    url: "https://github.com/athreshkiran",
  },
] as const;

export const aboutMeData = [
  "I'm a software engineer with over **4 years of experience**, now pursuing my MS in Computer Science at the University of Washington (Graduating June 2026).",
  "My journey has given me a deep understanding of the entire product lifecycle, from **building from zero** to engineering for **massive scale**. As a Founding Engineer, I innovated a **patent-pending** computer vision algorithm and **architected** the mobile product for an NHS-partnered application. Later, at Junglee Games, I owned the development of **high-throughput** payment systems and core features for an 80M+ user gaming platform. This is where I mastered high-performance engineering in a complex, live environment",
  "I'm now seeking an **SDE 2** role where I can combine both sides of my experience, architecture and optimization, to build impactful, scalable solutions"
] as const;



export const experiencesData = [
  {
    title: "Master of Science in Computer Science",
    location: "University of Washington, Bothell",
    description:
      "Currently pursuing a Master's degree in Computer Science, specializing in AI and software engineering. Expected graduation in June 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
  {
    title: "Founding Engineer & Mobile SDE",
    location: "Parallel Reality",
    description:
      "Led the development of a health-tech app for the NHS, architected scalable AWS serverless APIs, and developed a patent-pending computer vision algorithm. Reduced development time by 40% through strategic leadership.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Software Development Engineer",
    location: "Junglee Games",
    description:
      "Owned the development of an express payment system, reducing transaction times by 40%. Engineered core features that increased user retention by 25% for an application with over 80 million users.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
] as const;

export const coreExpertise = [
  "Flutter",
  "Android (Java & Kotlin)",
  "iOS (Swift)",
  "AWS (Serverless, S3)",
  "Google Firebase"
] as const;

export const proficientWith = [
  "Python",
  "TypeScript",
  "TensorFlow",
  "React.js",
  "MongoDB"
] as const;

export const toolsAndMethods = [
  "CI/CD",
  "Docker",
  "Computer Vision",
  "Payment Integration",
  "Agile & Scrum",
] as const;

export const featuredProjectsData = [
  {
    logo: "https://play-lh.googleusercontent.com/52wPuftZtLd5lQWeJEmP3JZZPacgXmOGyp38x2lCXKeZEOxrTMK6nOWv1LCmc_yI8ulzwwtwweMMsakZBZB-1g=w240-h480-rw",
    title: "Engineering at Scale",
    subtitle: "Junglee Rummy | Junglee Games",
    summary:
      "Owned and optimized high-throughput payment systems and core retention features for an this gaming platform, driving critical business metrics.",
    metrics: [
      {
        value: 80,
        label: "+ Million Users",
      },
      {
        value: 25,
        label: "% Increase in User Retention",
      },
      {
        value: 60,
        label: "% Boost in Payment Transactions",
      },
    ],
    techStack: ["Flutter", "Firebase", "AWS"],
  },
  {
    logo: "/EMA_logo.jpg",
    title: "Architecting from 0-to-1",
    subtitle: "EMA | Parallel Reality",
    summary:
      "Architected an NHS-partnered health-tech app from concept to launch, leading mobile strategy, AWS backend, and core AI feature development.",
    metrics: [
      {
        value: 40,
        label: "% Cut in Dev Time through Flutter Migration",
      },
      {
        value: 35,
        label: "% Boost in Patient Engagement",
      },
      {
        value: 1,
        label: "Patent-Pending On Device AI Algorithm",
      },
    ],
    techStack: ["React", "Node.js", "MongoDB"],
  },
] as const;
