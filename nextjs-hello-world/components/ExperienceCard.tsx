"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 inset-x-0 bottom-0 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-600 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto h-[550px]">
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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Deutsche_Telekom_2022.svg/640px-Deutsche_Telekom_2022.svg.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">FrontEnd Developer</h4>
        <p className="font-bold text-xl mt-1">T-MOBILE POLAND</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={500}
            height={500}
            alt=""
            className="h-10 w-10 rounded-full"
            src="https://www.drupal.org/files/project-images/screenshot_361.png"
          />
          <Image
            width={500}
            height={500}
            alt=""
            className="h-10 w-10 rounded-full"
            src="https://www.drupal.org/files/project-images/screenshot_361.png"
          />
          <Image
            width={500}
            height={500}
            alt=""
            className="h-10 w-10 rounded-full"
            src="https://www.drupal.org/files/project-images/screenshot_361.png"
          />
          <Image
            width={500}
            height={500}
            alt=""
            className="h-10 w-10 rounded-full"
            src="https://www.drupal.org/files/project-images/screenshot_361.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Strated work... - Ended ...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};
