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
          className="flex fixed bottom-24 right-10 bg-stackup-scroll-top hover:bg-stackup-scroll-dark/60 dark:bg-stackup-highlight-dark dark:hover:bg-stackup-highlight-dark/50  text-white font-semibold dark:text-white p-3 rounded-lg shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          Top
          <IoIosArrowUp className="ml-2 text-lg w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
