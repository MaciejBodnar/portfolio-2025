"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
  jobTitle?: string;
  company?: string;
  companyImage?: string;
  points?: string[];
  workStarted?: string;
  workEnded?: string;
  technologies?: [
    {
      image: string;
    },
  ];
}

export const ExperienceCard = ({
  jobTitle,
  company,
  companyImage,
  points,
  workStarted,
  workEnded,
  technologies,
}: ExperienceCardProps) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 inset-x-0 bottom-0 flex-shrink-0 w-full md:w-[600px] xl:w-full snap-center bg-gray-600 p-4 md:p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-auto h-[450px] md:h-full">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={companyImage}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light flex justify-center">
          {jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-2xl mt-1 flex justify-center">
          {company}
        </p>
        <div className="flex space-x-2 my-1 md:my-2">
          {technologies?.map((technology, index) => (
            <Image
              key={index}
              className="h-14 w-14 rounded-full"
              src={technology.image}
              alt=""
              width={56}
              height={56}
            />
          ))}
        </div>
        <p className="flex justify-center uppercase text-base md:text-xl py-2 text-gray-300">
          {workStarted} - {workEnded}
        </p>

        <ul className="list-disc space-y-4 text-2xl grid grid-cols-2 gap-x-4 gap-y-2">
          {points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
