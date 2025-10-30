
import Image from "next/image";
import React from "react";
import { FiDownload, FiStar } from "react-icons/fi";

interface AppCardProps {
  title: string;
  imageUrl: any;
  downloads: string;
  rating: string;
  subtitle: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, subtitle, imageUrl, downloads, rating }) => {
  return (
    <div className="group p-2 flex-shrink-0">
      <section className="bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg w-40 h-38 relative hover:scale-105 transition-transform flex flex-col items-center justify-center p-4 dark:bg-gray-950 dark:bg-opacity-75 dark:border-white/10">
        <div className="w-14 h-14 relative mb-2 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={`${title} logo`} fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="text-sm font-semibold text-center mb-2">{title}</div>
        <div className="text-xs text-center mb-2 text-gray-400">{subtitle}</div>
        <div className="flex justify-around w-full text-xs">
          <div className="flex items-center">
            <FiDownload className="mr-1" />
            <span>{downloads}</span>
          </div>
          <div className="flex items-center">
            <FiStar className="mr-1" />
            <span>{rating}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppCard;
