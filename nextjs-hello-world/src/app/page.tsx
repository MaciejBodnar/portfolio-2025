import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { WorkExperience } from "../../components/WorkExperience";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Projects";
import { ContactMe } from "../../components/ContactMe";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 text-white h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Maciek&lsquo;s portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="project" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              width={500}
              height={500}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylObEfIVgdzJgz6gTcGdbiL2ogOzr_BAuHlr4zPu12w&s"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
