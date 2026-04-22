import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../../Task/scrollToSection";
import { FadeIn } from "../../Animations/FadeIn";
import Typing from "../../Task/Typing";
import image from "../../assets/image.png";
import React from "react";

const Hero = () => {
  const words = ["Frontend", "Backend", "Fullstack"];
  return (
    <section className="min-h-[700px] pt-30 px-5 max-w-[1300px] mx-auto flex items-center">
      {/* //container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-2">
        <div className="flex flex-col gap-5 items-start justify-center">
          <FadeIn>
            <div className="">
              <div className="font-bold text-3xl">
                <h1>Hi there, </h1>
                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <h1>I'm</h1>
                  <h2>Eyob Alayu</h2>
                </div>
              </div>
              <Typing
                className="bg-linear-to-r from-primary to-secondary text-pink-600"
                words={words}
              />
            </div>
          </FadeIn>
          <p className="opacity-60">
            Turning ideas into full-stack web solutions , I build modern,
            responsive full-stack web applications that turn ideas into real,
            scalable digital products.
          </p>

          <FadeIn>
            <div className="relative max-w-80 ">
              <div className="absolute inset-0 bg-pink-600 rounded-lg blur"></div>
              <button
                className="relative bg-black w-full flex item-center justify-center space-x-3 py-1 px-5 rounded-lg text-sm"
                onClick={() => scrollToSection("contact-me")}
              >
                <span className="">
                  <Star className="text-primary w-3 h-3 mt-1" />
                </span>
                <span className="divide-x divide-x-primary group">
                  <span className="text-primary pr-5">Full-Stack</span>
                  <span className="text-secondary pl-5 ">
                    Web Developer
                    <ArrowRight className="w-10 h-5 inline transition-all duration-400 group-hover:translate-x-2" />
                  </span>
                </span>
              </button>
            </div>
          </FadeIn>
        </div>
        <div className="relative rounded-2xl orverflow-hidden aspect-4/5 max-w-[500px] md:max-w-[300px] ml-auto group">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-primary inset-[-2px] animate-[spin_6s_infinite] rounded-lg"></div>
          </div>
          <div className="relative rounded-2xl m-[2px] h-cal(100%-2px) overflow-hidden">
            <img src={image} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
