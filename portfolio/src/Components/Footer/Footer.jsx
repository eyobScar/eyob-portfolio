import { Heart, LocateIcon, Mail } from "lucide-react";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaTelegram,
} from "react-icons/fa";
import { navLinks } from "../../Data/navLinks";
import { scrollToSection } from "../../Task/scrollToSection";

const Footer = () => {
  return (
    <section className="mt-20 pb-20">
      <div className="flex flex-col gap-5 md:grid grid-cols-[2fr_1fr_1fr] ">
        <div className="flex flex-col gap-4">
          <div className="">
            <h3 className="bg-gradient-to-r from-primary to-secondary text-2xl w-fit bg-clip-text text-transparent font-bold">
              Eyob
            </h3>
            <p className="dark:text-white/60 text-black/70" >
              Turning ideas into full-stack web solutions
            </p>
          </div>
          <div className="flex gap-2 border py-3 px-4 rounded-lg border-primary/30 group">
            <Mail className="text-primary opacity-50 group-hover:opacity-80 transition-all duration-300" />
            <p className="text-secondary opacity-80 group-hover:opacity-100 transition-all duration-300">
              eyobealayu15@gmail.com
            </p>
          </div>
          <div className="flex gap-2 border py-4 px-4 rounded-lg border-primary/30 group">
            <LocateIcon className="text-primary opacity-50 group-hover:opacity-80 transition-all duration-300" />
            <p className="text-secondary opacity-80 group-hover:opacity-100 transition-all duration-300">
              Bahirdar University
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl text-black dark:text-white">Quick Links</h3>
          <ul className="list-disc pl-5 marker:text-primary/50 group">
            {navLinks.map((link) => (
              <li key={link._id} className="hover:marker:text-primary/100 ">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-black opacity-60 hover:opacity-100 dark:text-white transition-all duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-black dark:text-white">Connect with Me</h3>
          <p className="text-black/60 dark:text-white/60">Feel free to contact</p>
          <div className="flex">
            <div className="p-2 border border-transparent w-fit rounded-lg hover:border hover:border-primary group transition-all duration-300">
              <a href="https://github.com/eyobScar" target="_blank">
                <FaGithub className="text-2xl  group-hover:text-primary/80 transition-all duration-300 text-black dark:text-white" />
              </a>
            </div>
            <div className="p-2 border border-transparent w-fit rounded-lg hover:border hover:border-primary group transition-all duration-300">
              <a href="http://www.linkedin.com/in/eyobScar">
                <FaLinkedin className="text-2xl  group-hover:text-primary/80 transition-all duration-300 text-black dark:text-white" />
              </a>
            </div>
            <div className="p-2 border border-transparent w-fit rounded-lg hover:border hover:border-primary group transition-all duration-300">
              <a href="https://t.me/eyob_Scar" target="_blank">
                <FaTelegram className="text-2xl  group-hover:text-primary/80 transition-all duration-300 text-black dark:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 md:mt-30 ">
        <p className="dark:text-white/40 text-black/40">&copy; 2026 Eyob Alayu All rights reserved</p>
        <div className="opacity-">
          <span className="dark:text-white/40 text-black/40">Built with</span>
          <span className="">
            <Heart className="mb-1 inline mx-2 animate-pulse text-primary fill-primary w-4" />
          </span>
          <span className="dark:text-white/40 text-black/40">using React & Tailwindcss</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
