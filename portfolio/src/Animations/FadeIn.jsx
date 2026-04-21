import React, { useEffect, useRef, useState } from "react";

export const FadeIn = ({
  threshold = 0.1,
  delay = 0,
  duration = 500,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, threshold]);

  return (
    <div
      ref={elementRef}
      className={`${setIsVisible ? "animate-FadeIn" : "opacity-0"}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationDuration: isVisible ? `${duration}ms` : "0ms",
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};
