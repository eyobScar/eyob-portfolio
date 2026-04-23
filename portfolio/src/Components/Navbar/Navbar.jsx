import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../../Data/navLinks";
import { Layers, Menu, Moon, Sun, X } from "lucide-react";
import { personalInfo } from "../../Data/aboutMe";
import { scrollToSection } from "../../Task/scrollToSection";
import { useScrollSpy } from "../../Task/useScrollSpy";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  localStorage.setItem("theme", "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const activeSection = useScrollSpy(navLinks.map((item) => item.id));

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="">
      <nav
        className={`fixed left-0 top-0 right-0 w-full z-1000 py-4 transition-all duration-300 ${isScrolled ? "dark:bg-black/30 bg-white backdrop-blur-lg" : "bg-transparent"}`}
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div className="px-5 max-w-[1300px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center text-pink-600" style={{}}>
              <Layers />
              <button
                className="text-2x1 font-bold back bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {personalInfo.name.split(" ")[0]}
              </button>
            </div>
            <ul className="hidden md:flex gap-5">
              {navLinks.map((link) => (
                <li key={link._id} className="group ">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`bg-linear-to-r from-primary to-secondary bg-clip-text relative text-base font-medium group-hover:text-primary/80 transition-all duration-300  cursor-pointer ${activeSection === link.id ? " text-transparent" : "text-black/70 dark:text-white text-sm"}`}
                  >
                    {link.name}
                    <span
                      className={`absolute top-0 left-0 z-[-1] w-full h-full border-b-4 border-b-pink-600 rounded-lg opacity-0  transition-all duration-300
                    transform   ${activeSection === link.id ? "opacity-100 scale-100 translate-y-1" : "scale-0 translate-y-5"} `}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex items-center gap-4">
              <button
                className="border border-pink-600 px-10 py-1 rounded-full text-base text-cyan-600 font-bold"
                onClick={() => scrollToSection("contact-me")}
              >
                Get Me
              </button>
              <div className="-order-1" onClick={() => setDark((dark) => !dark)}>
                {dark ? (
                  <Sun className="w-5 text-yellow-500 opacity-80 hover:opacity-100 transition-all duration-300" />
                ) : (
                  <Moon className="w-5 text-black opacity-80 hover:opacity-100 transition-all duration-300" />
                )}
              </div>
            </div>
            <div className="group md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="transition-all duration-300 opacity-80 group-hover:opacity-100 "
                aria-label="menu"
                aria-expanded={isOpenMenu}
              >
                <div >
                  {isOpenMenu ? (
                    <X className="w-6 h-6 text-black dark:text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-black dark:text-white" />
                  )}
                </div>
              </button>
              <div className="-order-1 " onClick={() => setDark((dark) => !dark)}>
                {dark ? (
                  <Sun className="w-5 text-yellow-500 opacity-80 hover:opacity-100 transition-all duration-300" />
                ) : (
                  <Moon className="w-5 text-black dark:text-white/80 dark:hover:text-white/100 opacity-80 hover:opacity-100 transition-all duration-300" />
                )}
              </div>
            </div>
          </div>

          {isOpenMenu ? (
            <div className="px-5">
              <ul className="md:hidden transition-all duration-300 backdrop-blur-lg">
                {navLinks.map((link) => (
                  <button
                    key={link._id}
                    className={`w-full block text-left px-3 py-2 rounded-lg transition-all duration-300 bg-linear-to-r from-primary to-secondary bg-clip-text hover:text-transparent  cursor-pointer ${activeSection === link.id ? "text-transparent" : " text-black/70 dark:text-white/90"}  `}
                    onClick={() => {
                      scrollToSection(link.id);
                      setIsOpenMenu(false);
                    }}
                  >
                    {link.name}
                  </button>
                ))}
              </ul>
              <button
                className="md:hidden w-full border border-pink-600 py-2 rounded-full"
                onClick={() => {
                  scrollToSection("contact-me");
                  setIsOpenMenu(false);
                }}
              >
                Get Me
              </button>
            </div>
          ) : (
            <div className="none "></div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
