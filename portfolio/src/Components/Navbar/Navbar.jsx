import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../../Data/navLinks";
import { Layers, Menu, X } from "lucide-react";
import { personalInfo } from "../../Data/aboutMe";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + offset;
        for (let ind = sectionIds.length - 1; ind >= 0; ind--) {
          const section = document.getElementById(sectionIds[ind]);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              setActiveSection(sectionIds[ind]);
              return;
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener(scroll, handleScroll);
    }, [sectionIds, offset]);
    return activeSection;
  };
  const activeSection = useScrollSpy(navLinks.map((item) => item.id));

  const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollReveal = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);

    const { threshold = 0.1, rootMargin = "0px" } = options;
    const ref = useRef(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold,
          rootMargin,
        },
      );
      observer.observe(element);
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [threshold, rootMargin]);
    return { ref, isVisible };
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    // setIsOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={`fixed left-0 top-0 right-0 w-full z-1000 py-4 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div className="max-w[1300px] mx-auto px-5">
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
            <ul className="hidden md:flex gap-3">
              {navLinks.map((link) => (
                <li key={link._id} className="group">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`bg-linear-to-r from-primary to-secondary bg-clip-text relative text-base font-medium group-hover:text-pink-800 ${activeSection === link.id ? " text-transparent" : "text-white"}`}
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
            <div className="hidden md:flex items-center">
              <button
                className="border border-pink-600 px-10 py-1 rounded-full text-base"
                onClick={() => scrollToSection("contact-me")}
              >
                Get Me
              </button>
            </div>
            <div className="group md:hidden">
              <button
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="transition-all duration-300 opacity-80 group-hover:opacity-100 p-4"
                // aria-label="menu"
                // aria-expanded={isOpenMenu}
              >
                {isOpenMenu ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isOpenMenu ? (
            <div className="px-5">
              <ul className="md:hidden transition-all duration-300 ">
                {navLinks.map((link) => (
                  <button
                    key={link._id}
                    className={`w-full block text-left px-3 py-2 rounded-lg transition-all duration-300 bg-linear-to-r from-primary to-secondary bg-clip-text hover:text-transparent  ${activeSection === link.id ? "text-transparent" : "text-white"}  `}
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
    </div>
  );
};

export default Navbar;
