"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowRight,
  BsEnvelope,
  BsLinkedin,
  BsMailbox,
} from "react-icons/bs";
import {
  HiDocument,
  HiDownload,
  HiOutlineMail,
  HiViewGrid,
} from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { displayPictureData, introData, socialLinks } from "@/lib/data";
import { track } from "@vercel/analytics";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const fade_in_variant = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center scroll-mt-36"
      initial="hidden"
      animate="visible"
      variants={fade_in_variant}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   type: "tween",
          //   duration: 0.2,
          // }}
          >
            <Image
              src={displayPictureData.src}
              alt={displayPictureData.alt}
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-8 mt-6 text-2xl font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{introData.name}</span>
      </motion.h1>
      <motion.h2
        className="mb-10 px-4 text-lg font-medium leading-8 sm:text-2xl sm:leading-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
        }}
      >
        {introData.title}
        <br />
        {introData.roleTitle}
      </motion.h2>

      <motion.div
        className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div
          className="cursor-pointer group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            track('Contact Me Clicked');
            window.location.href = `mailto:${socialLinks[0].url}?subject=Reaching out from your portfolio website`;
          }}
        >
          Contact me
          <HiOutlineMail className="group-hover:translate-x-1 transition" />
        </div>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1tKUAcYz196RbRKLTpNMnl0CYZ_yzpIP3"
          download
          onClick={() => {
            track('Resume Viewed');
          }}
        >
          View Resume
          <HiDocument className="group-hover:-translate-y-1 transition" />
        </a>
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-4 text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
        }}
      >
        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/100"
          href={socialLinks[1].url}
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/100"
          href={socialLinks[2].url}
          aria-label="GitHub"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </motion.section>
  );
}
