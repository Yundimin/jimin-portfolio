import { useState } from "react";
import { NavbarWrapper } from "../styles/headers.modules";
import headerLogo from "../assets/header-logo.png";

export function Header() {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = (scrollTo: string) => {
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
    { name: "SKILLS", scrollTo: "About_me" },
    { name: "ARCHIVING", scrollTo: "About_me" },
    { name: "PROJECT", scrollTo: "About_me" },
    { name: "HISTORY", scrollTo: "About_me" },
    { name: "CONTACT", scrollTo: "About_me" },
  ];

  return (
    <>
      <NavbarWrapper>
        <div className="nav-box">
          <img src={headerLogo} alt="headerLogo" className="logo" />
          <div className="menu-box">
            {menuItems.map((nav, scrollTo) => (
              <section id={nav.name}>
                <div
                  className={
                    nav.name === selectedItem ? "links selected" : "links"
                  }
                  onClick={() => handleItemClick(nav.scrollTo)}
                >
                  {nav.name}
                </div>
              </section>
            ))}
          </div>
        </div>
      </NavbarWrapper>
    </>
  );
}
