"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { type SanityDocument } from "next-sanity";
import { client } from "../src/app/sanity/client";
import { urlFor } from "@/app/sanity/sanityImages";

export const About = () => {
  const [abouts, setAbouts] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type=="pageInfo"]`;
      const options = { next: { revalidate: 30 } };
      const data = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setAbouts(data);
    };
    fetchPosts();
  }, []);
  return abouts.map((about) => (
    <motion.div
      key={about._id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:test-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-18 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
        src={urlFor(about.heroImage).url()}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold line-clamp-2">
          Here is a{" "}
          <span className="underline decoration-orange-400">little</span>{" "}
          background
        </h4>
        <p className="text-sm line-clamp-12">{about.backgroundInformation}</p>
      </div>
    </motion.div>
  ));
};

export default About;
