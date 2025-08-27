"use client";
import { useState, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircle } from "./BackgroundCircle";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "../src/app/sanity/client";
import { urlFor } from "@/app/sanity/sanityImages";

export const Hero = () => {
  const [posts, setPosts] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type=="pageInfo"]`;
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
  const [text] = useTypewriter({
    words: [
      "Hello!!",
      "My name is Maciej Bodnar",
      "Nice of you to visit my website",
      "Enjoy :)",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      {posts.map((post) => (
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          width={500}
          height={500}
          src={urlFor(post.profilePic).url()}
          alt=""
          key={post._id}
        />
      ))}
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Frontend Developer
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 space-x-2">
          <button
            className="heroButton"
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </button>
          <button
            className="heroButton"
            onClick={() => {
              const element = document.getElementById("experience");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </button>
          <button
            className="heroButton"
            onClick={() => {
              const element = document.getElementById("skills");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </button>
          <button
            className="heroButton"
            onClick={() => {
              const element = document.getElementById("project");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};
