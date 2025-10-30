import React from "react";
import { FaCode, FaGamepad, FaHospitalUser, FaReact } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

export const pageMetaData = {
  title: "Athresh | Personal Portfolio",
  description:
    "Founding Engineer & Mobile SDE with 4 years of experience specializing in Full-Stack, Mobile, AI & Cloud Engineering",
};
interface Link {
  name: string;
  hash: string;
}
export const links: Link[] = [
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
    name: "Featured Work",
    hash: "#work",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Articles",
    hash: "#articles",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

interface Article {
  title: string;
  link: string;
  source: string;
}

export const articlesData: Article[] = [
  {
    title: "SimplyMime: A Dynamic Gesture Recognition and Authentication System for Smart Remote Control",
    link: "https://ieeexplore.ieee.org/abstract/document/10742306",
    source: "IEEE",
  },
  {
    title: "Step-By-Step Team Workflow with GitHub Desktop",
    link: "https://medium.com/@athresh.kiran/step-by-step-team-workflow-with-github-desktop-9c1797186c14",
    source: "Medium",
  },
  {
    title: "My 40-day Vegetarian Keto Journey",
    link: "https://medium.com/@athresh.kiran/my-40-day-vegetarian-keto-journey-e9540c571efd",
    source: "Medium",
  },
] as const;
interface DisplayPictureData {
  src: string;
  alt: string;
}
export const displayPictureData: DisplayPictureData = {
  src: "/headshot.jpg",
  alt: "Athresh portrait",
} as const;
interface IntroData {
  name: string;
  title: string;
  roleTitle: string;
}
export const introData: IntroData = {
  name: "Athresh Kiran",
  title: "Mobile SDE & Founding Engineer",
  roleTitle: "Flutter, Cloud & AI-driven Solutions",
} as const;

interface SocialLink {
  name: string;
  url: string;
}
export const socialLinks: SocialLink[] = [
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

export const aboutMeData: string[] = [
  "I'm a software engineer with over **4 years of experience**, now pursuing my MS in Computer Science at the University of Washington (Graduating June 2026).",
  "My journey has given me a deep understanding of the entire product lifecycle, from **building from zero** to engineering for **massive scale**. As a Founding Engineer, I innovated a **patent-pending** computer vision algorithm and **architected** the mobile product for an NHS-partnered application. Later, at Junglee Games, I owned the development of **high-throughput** payment systems and core features for an 80M+ user gaming platform. This is where I mastered high-performance engineering in a complex, live environment",
  "I'm now seeking an **SDE 2** role where I can combine both sides of my experience, architecture and optimization, to build impactful, scalable solutions",
] as const;

export const coreExpertise: string[] = [
  "Flutter",
  "Android (Java & Kotlin)",
  "iOS (Swift)",
  "AWS (Serverless, S3)",
  "Google Firebase",
] as const;

export const proficientWith: string[] = [
  "Python",
  "TypeScript",
  "TensorFlow",
  "React.js",
  "MongoDB",
] as const;

export const toolsAndMethods: string[] = [
  "CI/CD",
  "Docker",
  "Computer Vision",
  "Payment Integration",
  "Agile & Scrum",
] as const;

interface FeaturedProjectData {
  logo: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: {
    value: number;
    label: string;
  }[];
  techStack: string[];
}
export const featuredProjectsData: FeaturedProjectData[] = [
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
    techStack: [
      "Flutter",
      "Payment Systems",
      "CI/CD",
      "Analytics",
      "Performance Optimization",
    ],
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
    techStack: [
      "Flutter",
      "Native Android/iOS",
      "Computer Vision",
      "MongoDB",
      "AWS Lambda",
    ],
  },
] as const;

interface AppData {
  title: string;
  subtitle: string;
  imageUrl: string;
  downloads: string;
  rating: string;
}
export const appsData: AppData[] = [
  {
    //topstory.fiction.novel
    title: "Fictio",
    subtitle: "E-Book Platform",
    imageUrl: "/fictio.webp",
    downloads: "500K+",
    rating: "4.2",
  },
  {
    //com.pbe.syllabus.pbesyllabus
    title: "P.B.E.Syllabus",
    subtitle: "Student Learning",
    imageUrl: "/pbe-syllabus.jpg",
    downloads: "5K+",
    rating: "4.9",
  },
  {
    title: "Misssy Crew",
    subtitle: "Content Platform",
    imageUrl: "/misssy-crew.avif",
    downloads: "100K+",
    rating: "4.6",
  },
  {
    //com.novelmonkey.audioflow
    title: "AudioFlow",
    subtitle: "Audiobook Platform",
    imageUrl: "/audio-flow.webp",
    downloads: "10K+",
    rating: "4.9",
  },
  {
    title: "Futu",
    subtitle: "Event Scheduling",
    imageUrl: "/futu.webp",
    downloads: "10K+",
    rating: "4.7",
  },
  {
    title: "DietBeans",
    subtitle: "Nutrition Tracker",
    imageUrl: "/dietbeans.png",
    downloads: "1K+",
    rating: "4.8",
  },
  {
    title: "JetBox",
    subtitle: "Delivery Service",
    imageUrl: "/jetbox.png",
    downloads: "5K+",
    rating: "4.8",
  },
  {
    title: "EMA Sports",
    subtitle: "AI Trainer",
    imageUrl: "/ema-sports.png",
    downloads: "5K+",
    rating: "4.7",
  },
  {
    title: "Wellness",
    subtitle: "Fitness Tracker",
    imageUrl: "/wellness-plan.webp",
    downloads: "5K+",
    rating: "4.6",
  },
  {
    title: "Bilder Talk",
    subtitle: "Intercom VOIP",
    imageUrl: "/bilder-talk.png",
    downloads: "1K+",
    rating: "4.9",
  },
  {
    title: "EMA NHS",
    subtitle: "AI Health",
    imageUrl: "/ema-nhs.webp",
    downloads: "5K+",
    rating: "4.8",
  },
  {
    title: "Junglee Rummy",
    subtitle: "Real Money Gaming",
    imageUrl: "/junglee-rummy.webp",
    downloads: "80M+",
    rating: "4.3",
  },
  {
    title: "P.D.C",
    subtitle: "Certification Platform",
    imageUrl: "/pdc-diet.webp",
    downloads: "1K+",
    rating: "4.5",
  },
 ] as const;

export const educationData = [
  {
    logo: "/uw-logo.png",
    degree: "Master of Science in Computer Science",
    university: "University of Washington",
    summary:
      "Graduate Teaching Assistant for CSE, Instructed and mentored 500+ undergraduate students in core Java and Object-Oriented Programming principles through courses like Computer Programming I & II",
    gpa: "3.85",
    courses: [
      "Deep Learning and AI",
      "High Performance Computing",
      "Parallel Programming",
      "Software Architecture",
    ],
  },
  {
    logo: "/vit.png",
    degree: "Bachelor of Technology in Computer Science",
    university: "Vellore Institute of Technology",
    summary:
      "Research Assistant at AirLab, Performed rigourous research on Exposing security vulnerabilities in low-cost healthcare wearables. ",
    gpa: "3.86",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Compiler Design",
    ],
  },
] as const;

interface Experience {
  title: string;
  location?: string;
  description: string[];
  icon: React.ReactElement;
  date: string; // optional
}
export const experiencesData: Experience[] = [
  {
    title: "Software Development Engineer",
    location: "Junglee Games",
    description: [
      "Engineered and optimized core features for a Flutter-based gaming application, scaling to support 80M+ users on both Android and iOS platforms.",
      "Owned the development of an express payment system by redesigning the transaction flow, which slashed average transaction times by 40% and enhanced user experience.",
      'Architected and launched a dynamic user onboarding flow and a "Challenger" game mode, directly contributing to a 25% increase in user retention',
      "Led a cross-functional initiative to integrate Amazon Pay as a new payment option, resulting in a 60% surge in wallet-based transactions in the first quarter of deployment (Q2 2024)",
      "Championed and established new architectural guidelines and clean code standards, reducing technical debt and accelerating new feature release cycles by 20% while simultaneously mentoring 2 fellow engineers on best practices",
    ],
    icon: React.createElement(FaGamepad),
    date: "Dec 2023 - Aug 2024",
  },
  {
    title: "Founding Engineer & Mobile SDE",
    location: "Parallel Reality",
    description: [
      "Spearheaded mobile engineering for an NHS-partnered health-tech application from ground up, delivering remote patient monitoring and care management tools to over 5,000+ users",
      "Innovated a patent-pending computer vision and deep learning algorithm for real-time on device exercise tracking, which improved patient engagement and data accuracy by 35%",
      "Architected and implemented scalable REST APIs using AWS Lambda and MongoDB to support seamless data synchronization between mobile clients and a React.js patient management dashboard.",
      "Led the strategic migration of separate native Android and iOS codebases to a unified Flutter framework, cutting future development time by 40% and improving feature parity.",
    ],
    icon: React.createElement(FaHospitalUser),
    date: "Jul 2021 - Dec 2023",
  },
  {
    title: "Full Stack Mobile Developer & Consultant",
    description: [
      "Delivered 12+ full-stack mobile applications from concept to launch on the App Store and Google Play, accumulating over 150,000+ total downloads",
      "Enhanced UX and functionality for a portfolio of apps across E-commerce and EdTech, achieving an average 25% improvement in user retention and boosting average app store ratings to 4.7/5 stars",
    ],
    icon: React.createElement(FaCode),
    date: "Jul 2021 - Dec 2023",
  },
  {
    title: "Student Developer",
    location: "Crio.Do",
    description: [
      "Enhanced my knowledge of Linux Commands, OS Concepts, Networking Concepts, REST API, Jackson, Interfaces, Code Refactoring, Gradle, Problem-solving, and a lot more",
    ],
    icon: React.createElement(PiStudentFill),
    date: "Jul 2021 - Dec 2023",
  },
] as const;
