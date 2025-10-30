import { links } from "./data";
import React from "react";

export type SectionName = (typeof links)[number]["name"];
export interface Link {
  name: string;
  hash: string;
}

export interface DisplayPictureData {
  src: string;
  alt: string;
}
export interface IntroData {
  name: string;
  title: string;
  roleTitle: string;
}
export interface SocialLink {
  name: string;
  url: string;
}
export interface FeaturedProjectData {
  logo: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: readonly {
    value: number;
    label: string;
  }[];
  techStack: readonly string[];
}
export interface AppData {
  title: string;
  subtitle: string;
  imageUrl: string;
  downloads: string;
  rating: string;
}
export interface EducationData {
  logo: string;
  degree: string;
  university: string;
  summary: string; 
  gpa: string;
  courses: readonly string[];
}
export interface Experience {
  title: string;
  location: string;
  description: readonly string[];
  icon: React.ReactElement;
  date: string;
}

export interface Article {
  title: string;
  link: string;
  source: string;
}