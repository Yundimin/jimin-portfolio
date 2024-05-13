import { useState } from "react";
import { NavbarWrapper } from "../styles/headers.modules";

export function Header() {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
    //     const element = document.getElementById(name);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "ABOUT ME", link: "About_me" },
    { name: "SKILLS", link: "About_me" },
    { name: "ARCHIVING", link: "About_me" },
    { name: "PROJECT", link: "About_me" },
    { name: "HISTORY", link: "About_me" },
    { name: "CONTACT", link: "About_me" },
  ];

  return (
    <>
      <NavbarWrapper>
        <div className="nav-box">
          <div className="logo">my logo</div>
          <div className="menu-box">
            {menuItems.map((nav, index) => (
              <section id={nav.name}>
                <div
                  className={
                    nav.name === selectedItem ? "links selected" : "links"
                  }
                  onClick={() => handleItemClick(nav.name)}
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
