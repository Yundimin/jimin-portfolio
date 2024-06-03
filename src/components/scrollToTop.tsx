import React, { useState } from "react";
import arrowImg from "../assets/arrow-up.svg";
import { ScrollWrapper } from "../styles/scrollToTop.modules";

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
          <img src={arrowImg} alt="arrow" />
        </button>
      )}
    </ScrollWrapper>
  );
};

export default ScrollToTop;
