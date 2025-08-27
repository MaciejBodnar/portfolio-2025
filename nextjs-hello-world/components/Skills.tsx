"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { type SanityDocument } from "next-sanity";
import { client } from "../src/app/sanity/client";
import { Skill } from "./Skill";
import { urlFor } from "@/app/sanity/sanityImages";

export const Skills = () => {
  const [skills, setSkills] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type==\"skill\"]`;
      const options = { next: { revalidate: 30 } };
      const data = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setSkills(data);
    };
    fetchPosts();
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0.1,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex relative flex-col text-center md:text-left xl:text-row max-w-full md:max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-18 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-26 md:uppercase tracking-[3px] text-gray-500 text-xs px-4 md:px-0">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 px-4 md:px-0">
        {skills.map((skill) => (
          <Skill
            key={skill._id}
            image={urlFor(skill.image).url()}
            progress={skill.progress}
          />
        ))}
      </div>
    </motion.div>
  );
};
