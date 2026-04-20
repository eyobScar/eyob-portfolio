import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollPositionCtlr = (sectionIds, offset = 100) => {
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
