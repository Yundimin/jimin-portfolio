import { useState, useEffect } from "react";
import { NavbarWrapper } from "../styles/headers.modules";
import headerLogo from "../assets/header-logo.png";

export function Header() {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (scrollTo: string) => {
    setSelectedItem(scrollTo);
    const element = document.getElementById(scrollTo.toLowerCase());
    if (element) {
      const yOffset = -100; // 위로 100px 이동
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: "Home", scrollTo: "home" },
    { name: "ABOUT ME", scrollTo: "aboutme" },
    { name: "SKILLS", scrollTo: "skills" },
    { name: "ARCHIVING", scrollTo: "archiving" },
    { name: "PROJECT", scrollTo: "project" },
    { name: "HISTORY", scrollTo: "history" },
    { name: "CONTACT", scrollTo: "contact" },
  ];

  const handleScroll = () => {
    const offset = -200;
    let currentSection = "home";
    menuItems.forEach((item) => {
      const element = document.getElementById(item.scrollTo.toLowerCase());
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top + offset <= 0) {
          currentSection = item.scrollTo;
        }
      }
    });
    setSelectedItem(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper>
      <div className="nav-box">
        <img src={headerLogo} alt="headerLogo" className="logo" />
        <div className="menu-box">
          {menuItems.map((nav) => (
            <div
              key={nav.scrollTo}
              className={
                nav.scrollTo === selectedItem ? "links selected" : "links"
              }
              onClick={() => handleItemClick(nav.scrollTo)}
            >
              {nav.name}
            </div>
          ))}
        </div>
      </div>
    </NavbarWrapper>
  );
}
