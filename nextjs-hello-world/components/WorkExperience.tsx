"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExperienceCard } from "./ExperienceCard";
import { type SanityDocument } from "next-sanity";
import { client } from "../src/app/sanity/client";
import { urlFor } from "@/app/sanity/sanityImages";
// import { urlFor } from "../src/app/sanity/sanityImages";

export const WorkExperience = () => {
  const [experiences, setExperiences] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type==\"experience\"]`;
      const options = { next: { revalidate: 30 } };
      const data = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setExperiences(data);
    };
    fetchPosts();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-18 uppercase tracking-[10px] text-gray-500 text-2xl px-6 md:px-0">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-0 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience._id}
            jobTitle={experience.jobTitle}
            points={experience.points}
            companyImage={urlFor(experience.companyImage).url()}
            company={experience.company}
            workEnded={experience.dateEnd}
            workStarted={experience.dateStarted}
          />
        ))}
      </div>
    </motion.div>
  );
};
