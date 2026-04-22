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

const TechStack = () => {
  return (
    <div className="my-20 max-w-[1300px] mx-auto px-5 w-full ">
      <div className="w-fit mx-auto text-center">
        <h2 className="text-2xl">My Tech Stacks</h2>
        <hr className="border-none h-1 w-25 bg-primary mx-auto my-2" />
        <p className="opacity-80">Tools which I am using for development</p>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-wrap gap-10 mt-10 justify-center">
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black group">
              <FaHtml5 className="text-primary text-5xl  opacity-70 group-hover:opacity-100 transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">HTML5</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black">
              <FaCss3 className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">CSS3</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black ">
              <FaJs className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Javascript</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black">
              <SiTailwindcss className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Tailwindcss</span>
            </div>
          </div>
          {/*  */}
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black ">
              <FaReact className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">React</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black">
              <FaNode className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Node.js</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black">
              <SiMysql className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Mysql</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black">
              <SiMongodb className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">MongoDB</span>
            </div>
          </div>
          <div className="relative w-30 sm:w-40 group ">
            <div className="absolute rounded-md bg-primary inset-0 blur "></div>
            <div className="relative flex items-center space-x-2  w-30 sm:w-40 rounded-md px-3 py-1 bg-black">
              <SiGit className="text-primary text-5xl opacity-70 group-hover:opacity-100  transition-all duration-300" />
              <span className="text-secondary group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)]">Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
