import { Circle, Dot } from "lucide-react";
import React from "react";

const Project = ({
  image,
  projectDescription,
  projectTitle,
  projectTechs,
  projectLiveURL,
  projectGithubURL,
  projectCategory,
}) => {
  return (
    <div className="p-2  max-w-[400px] md:max-w-full">
      <div className="flex flex-col gap-3 items-center hover:scale-101 transition-all duration-300">
        <div className=" bg-accent/5 dark:bg-accent rounded-lg p-4">
          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full rounded-lg opacity-70 hover:opacity-80 hover:scale-105 transition-all duration-300 "
            />
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className=" my-2 dark:text-white text-black">{projectTitle}</h3>
              <span className="text-xs border border-primary/50 px-2 py-1 rounded-lg text-secondary">{projectCategory}</span>
            </div>
            <p className=" dark:text-white/60 text-black/60">{projectDescription}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {projectTechs.map((tech, ind) => (
                <li key={ind} className=" border border-primary/50 rounded-lg">
                  <div className=" dark:bg-black px-2  w-fit rounded-lg">
                    <span className="text-secondary text-xs">{tech}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-1 items-center border border-primary/30 rounded-lg p-2 cursor-pointer">
              <Circle
                className="fill-green-500 text-green-500 w-3 h-3 animate-pulse
               border border-green-500/30 rounded-full
              "
              />
              <a href={projectLiveURL} target="_blank">
                <p className="text-sm dark:text-white/80 text-black/80">Live Preview</p>
              </a>
            </div>
            <div className="flex gap-1 items-center border border-primary/30 rounded-lg p-2 cursor-pointer">
              <a href={projectGithubURL} target="_blank">
                <p className="text-sm text-black/80 dark:text-white/80">Github Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
