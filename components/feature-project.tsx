'use client';

import { motion, useAnimation, useInView, animate, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FeaturedProjectProps {
  logo: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: { value: number; label: string }[];
  techStack: string[];
}

const NumberAnimation = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(0);
          }
        },
      });
    }
  }, [isInView, value]);

  return <span ref={ref}>{value}</span>;
};

export default function FeaturedProject({
  logo,
  title,
  subtitle,
  summary,
  metrics,
  techStack,
}: FeaturedProjectProps) {

   const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial="hidden"
      animate={controls}
      className="w-full md:w-1/2 p-3"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col">
        <div className="flex items-center mb-3">
          <div className="w-14 h-14 mr-3 relative rounded-lg overflow-hidden">
            <Image src={logo} alt={`${title} logo`} fill style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-sm md:text-md text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {summary}
        </p>
        <div className="mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center py-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-400 dark:text-white">
                <NumberAnimation value={metric.value} />
                {metric.label.includes('+') && '+'}
                {metric.label.includes('%') && '%'}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 ml-2">
                {metric.label.replace('+', '').replace('%', '')}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}