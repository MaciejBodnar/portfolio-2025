"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { type SanityDocument } from "next-sanity";
import { client } from "../src/app/sanity/client";
import { SocialIcon } from "react-social-icons";

export const Header = () => {
  const [posts, setPosts] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type==\"social\"]`;
      const options = { next: { revalidate: 30 } };
      const data = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items p-6">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {posts.map((post) => (
          <SocialIcon
            key={post._id}
            url={post.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <SocialIcon
            url={"https://www.email.com/"}
            fgColor="gray"
            bgColor="transparent"
            as="p"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Email me!
          </p>
        </div>
      </motion.div>
    </header>
  );
};
