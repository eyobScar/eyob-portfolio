import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../../Animations/FadeIn";

const About = () => {
  const [isCollapssed, setIsCollapssed] = useState(true);
  return (
    <section className="" id="about">
      <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
        <div className="w-fit mx-auto">
          <h2 className=" text-2xl dark:text-white text-black">About Me</h2>
          <hr className="border-none h-1 w-20 bg-primary rounded-full mx-auto mt-1" />
        </div>
        <FadeIn>
          <div
            className={`text-black/70 dark:text-white/50 transition-all duration-300 ${isCollapssed ? "line-clamp-4" : ""} `}
          >
            <p>
              Thank you for taking the time to visit my portfolio. I’m Eyob Alayu,
              a third-year Information Technology student at Bahir Dar University
              with a strong interest in full-stack web development. I’m currently
              seeking an internship opportunity where I can apply my skills, gain
              real-world experience, and continue growing as a developer.
            </p>
            <br />
            <p>
              Although I’m still early in my journey, I have many ideas and
              ambitions I’m eager to explore. I’m constantly learning,
              experimenting, and challenging myself to turn those ideas into real,
              meaningful projects. I enjoy building applications, exploring new
              technologies, and improving my skills every day through consistent
              practice.
            </p>
            <br />
            <p>
              I take real pleasure in solving problems, creating user-friendly
              experiences, and transforming concepts into working solutions. I
              hope my work reflects my dedication and passion for this field, and
              I look forward to opportunities where I can learn, contribute, and
              grow further.
            </p>
          </div>
        </FadeIn>
        <div className="flex justify-center ">
          <button
            onClick={() => setIsCollapssed(!isCollapssed)}
            className="border border-primary py-0.5 px-3 rounded-lg text-secondary flex gap-1"
          >
            <span className=" cursor-pointer">
              {isCollapssed ? "More" : "Less"}
            </span>
            <span>
              <ChevronDown
                className={`w-4 ${!isCollapssed ? "" : "transform -rotate-90"} transition-all duration-300`}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
