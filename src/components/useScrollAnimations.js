import { useEffect } from "react";

const useScrollAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add specific animation classes for mission and story sections
            if (entry.target.classList.contains("mission-section")) {
              entry.target.classList.add("fade-in-left");
            } else if (entry.target.classList.contains("story-section")) {
              entry.target.classList.add("fade-in-right");
            }

            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    sections.forEach((section) => observer.observe(section));
  }, []);
};

export default useScrollAnimations;
