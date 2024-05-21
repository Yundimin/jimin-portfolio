import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Skills } from "./components/skills";
import { Archiving } from "./components/archiving";

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sectionStyle = {
    height: `${windowHeight}px`,
    margin: `100px 0 0 0 `,
  };

  return (
    <div>
      <Header />
      <div style={sectionStyle}>
        <Home />
        <AboutMe />
        <Skills />
        <Archiving />
      </div>
    </div>
  );
}

export default App;
