import React, { useState } from "react";
import { assets } from "../assets";
import { ScrollWrapper } from "../styles/scrollToTop.modules";

const {
  common: { arrowUpIcon },
} = assets;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <ScrollWrapper>
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src={arrowUpIcon} alt="arrow" />
        </button>
      )}
    </ScrollWrapper>
  );
};

export default ScrollToTop;
