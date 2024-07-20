import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-10 z-50 flex rounded-lg bg-stackup-scroll-top p-3  font-semibold text-white shadow-lg transition-all duration-300 hover:bg-stackup-scroll-dark/60 dark:bg-stackup-highlight-dark dark:text-white dark:hover:bg-stackup-highlight-dark/50"
          aria-label="Scroll to top"
        >
          Top
          <IoIosArrowUp className="ml-2 h-6 w-6 text-lg" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
