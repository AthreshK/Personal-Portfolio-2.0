import React from "react";
import { FaCode, FaGamepad, FaHospitalUser, FaReact } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import {
  Link,
  Article,
  SectionName,
  DisplayPictureData,
  IntroData,
  SocialLink,
  FeaturedProjectData,
  AppData,
  EducationData,
  Experience,
} from "./types";

export const pageMetaData = {
  title: "Athresh | Personal Portfolio",
  description:
    "Founding Engineer & Mobile Software Engineer with 4 years of experience specializing in Full-Stack, Mobile, AI & Cloud Engineering",
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
] as const satisfies readonly Link[];

export const articlesData = [
  {
    title:
      "SimplyMime: A Dynamic Gesture Recognition and Authentication System for Smart Remote Control",
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
] as const satisfies readonly Article[];

export const displayPictureData = {
  src: "/headshot.jpg",
  alt: "Athresh portrait",
} as const satisfies DisplayPictureData;

export const introData = {
  name: "Athresh Kiran",
  title: "Mobile Software Engineer & Founding Engineer",
  roleTitle: "Client Systems, Cloud & AI-Powered Platforms",
} as const satisfies IntroData;

export const socialLinks = [
  {
    name: "Email",
    url: "athresh.kiran@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/athreshkiran/",
  },
  {
    name: "GitHub",
    url: "https://github.com/AthreshK",
  },
] as const satisfies readonly SocialLink[];

export const aboutMeData = [
  "I'm a software engineer with over **4 years of experience**, currently pursuing my MS in Computer Science at the University of Washington (graduating June 2026).",
  "My journey has given me a deep understanding of the full product lifecycle, from **building products from the ground up** to engineering systems for **massive scale**. As a Founding Engineer, I developed a **patent-pending** computer vision algorithm and **architected** the mobile platform for an NHS-partnered healthcare application. Later, at Junglee Games, I owned **high-throughput** client-side payment flows and core product systems supporting an 80M+ user gaming platform, where I honed high-performance engineering in complex, live environments.",
  "I'm now focused on **SDE 2** opportunities where I can apply both architectural ownership and performance optimization to build scalable, reliable systems.",
] as const satisfies readonly string[];

export const coreExpertise = [
  "Flutter",
  "Android (Java & Kotlin)",
  "iOS (Swift)",
  "AWS (Serverless, S3)",
  "Google Firebase",
] as const satisfies readonly string[];

export const proficientWith = [
  "Python",
  "TypeScript",
  "TensorFlow",
  "React.js",
  "MongoDB",
] as const satisfies readonly string[];

export const toolsAndMethods = [
  "CI/CD",
  "Docker",
  "Computer Vision",
  "Payment Integration",
  "Agile & Scrum",
] as const satisfies readonly string[];

export const featuredProjectsData = [
  {
    logo: "/junglee-rummy.webp",
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
    title: "Architecting 0-to-1",
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
] as const satisfies readonly FeaturedProjectData[];

export const appsData = [
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
] as const satisfies readonly AppData[];

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
] as const satisfies readonly EducationData[];

export const experiencesData = [
  {
    title: "Software Development Engineer",
    location: "Junglee Games",
    description: [
      "Developed and optimized high-traffic Flutter client components used by 80M+ users, focusing on performance, stability, and correctness across Android and iOS.",
      "Owned and implemented client-side architecture for an express payment flow, redesigning transaction state handling and API coordination to reduce end-to-end checkout time by 40%.",
      "Led cross-functional integration of Amazon Pay into the mobile wallet experience, coordinating client changes and backend contracts to drive a 60% increase in wallet transactions",
      "Improved mobile codebase maintainability through architectural guardrails and targeted refactors, reducing release friction and improving delivery velocity by 20%",
    ],
    icon: React.createElement(FaGamepad),
    date: "Dec 2023 - Aug 2024",
  },
  {
    title: "Founding Engineer - Mobile & Client Systems",
    location: "Parallel Reality",
    description: [
      " Founding engineer responsible for end-to-end mobile architecture of an NHS-partnered healthcare platform, leading client systems from initial 0 to 1 development through production scale.",
      " Built and maintained native Android (Java) and iOS (Swift) applications before leading the migration to a unified Flutter architecture, improving feature parity and significantly reducing long-term development overhead.",
      " Designed and implemented on-device processing pipelines for real-time exercise tracking, posture assessment, and environment calibration, combining ML-based pose detection with custom mathematical logic and multithreaded execution (multithreading and concurrency) to ensure accuracy and performance on mobile devices",
      " Built complex, stateful mobile experiences including guided workout flows, timers, and live feedback loops, while ensuring correctness under app lifecycle changes, background execution, and network interruptions.",
      " Designed and implemented serverless backend APIs and healthcare delivery features (AWS Lambda, MongoDB, VoIP consultations, clinician dashboards), integrating mobile clients with cloud systems and backend services.",
    ],
    icon: React.createElement(FaHospitalUser),
    date: "Jul 2021 - Dec 2023",
  },
  {
    title: "Full Stack Mobile Developer & Consultant",
    location: "",
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
] as const satisfies readonly Experience[];
