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
    <article className="flex flex-col rounded-lg items-center space-y-7 inset-x-0 bottom-0 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-gray-600 p-4 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto h-[550px]">
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
        <h4 className="text-3xl font-light">{jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {technologies?.map((technology, index) => (
            <Image
              key={index}
              className="h-10 w-10 rounded-full"
              src={technology.image}
              alt=""
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {workStarted} - {workEnded}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
