import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../../Task/scrollToSection";
import { FadeIn } from "../../Animations/FadeIn";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen mt-50">
      {/* //container */}
      <FadeIn>
          <div className="relative max-w-80  ">
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
    </section>
  );
};

export default Hero;
