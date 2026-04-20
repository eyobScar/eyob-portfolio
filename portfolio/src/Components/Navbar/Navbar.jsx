import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../../Data/navLinks";
const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const activeSection = scrollPositionCtlr(navLinks.map((item) => item.id));

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpenMenu(false);
  };

  const scrollPositionCtlr = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + offset;
        for (let ind = sectionIds.length - 1; i >= 0; i--) {
          const section = document.getElementById(sectionIds[ind]);
          if (section) {
            const sectionTop = target.offsetTop();
            const sectionHeight = target.offsetHeight();
            if (scrollPosition > sectionTop && scrollPosition < sectionHeight) {
              setActiveSection(sectionIds[ind]);
              break;
            }
          }
        }
      };
      handleScroll();
      window.addEventListener("scroll".handleScroll, { passive: true });
      return () => window.removeEventListener(scroll, handleScroll);
    }, [sectionIds, offset]);
    return activeSection;
  };

  const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const target = section.offsetTop() - offset;
      window.scrollTo({ target, behaviour: "smooth" });
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className=" ">Navbar</nav>;
};

export default Navbar;
