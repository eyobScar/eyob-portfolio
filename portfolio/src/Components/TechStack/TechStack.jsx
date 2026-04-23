import React from "react";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FadeIn } from "../../Animations/FadeIn";

const TechStack = () => {
  return (
    <section className="my-20 max-w-[1100px] mx-auto px-5 w-full " id="tech-stack">
      <div className="w-fit mx-auto text-center">
        <h2 className="text-2xl text-black dark:text-white">My Tech Stacks</h2>
        <hr className="border-none h-1 w-25 bg-primary mx-auto my-2" />
        <p className="text-black/80 dark:text-white/80">Tools which I am using for development</p>
      </div>
      <FadeIn>
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap gap-10 mt-10 justify-center">
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white group">
                <FaHtml5 className="text-primary text-5xl  opacity-70 group-hover:opacity-100 transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">HTML5</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white">
                <FaCss3 className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">CSS3</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white ">
                <FaJs className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba (82,159,237,0.9)]">Javascript</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white">
                <SiTailwindcss className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Tailwind</span>
              </div>
            </div>
            {/*  */}
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white ">
                <FaReact className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">React</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white">
                <FaNode className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Node.js</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white">
                <SiMysql className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Mysql</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white">
                <SiMongodb className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">MongoDB</span>
              </div>
            </div>
            <div className="relative w-30 sm:w-40 group ">
              <div className="absolute rounded-md bg-primary inset-0 blur "></div>
              <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 dark:bg-black bg-white">
                <SiGit className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
                <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Git</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default TechStack;
