import { useState, useEffect } from "react";
import { NavbarWrapper } from "../styles/headers.modules";
import headerLogo from "../assets/header-logo.png";
import hamburgerIcon from "../assets/hamburger.svg"; // 햄버거 아이콘 이미지 추가

export const menuItems = [
  { name: "Home", scrollTo: "home" },
  { name: "ABOUT ME", scrollTo: "aboutme" },
  { name: "SKILLS", scrollTo: "skills" },
  { name: "ARCHIVING", scrollTo: "archiving" },
  { name: "PROJECT", scrollTo: "project" },
  { name: "HISTORY", scrollTo: "history" },
  { name: "CONTACT", scrollTo: "contact" },
];

export function Header() {
  const [selectedItem, setSelectedItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (scrollTo: string) => {
    setSelectedItem(scrollTo);
    const element = document.getElementById(scrollTo.toLowerCase());
    if (element) {
      const yOffset = -100; // 위로 100px 이동
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false); // 메뉴 항목 클릭 시 메뉴 닫기
  };

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
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="hamburger"
          style={{ width: 40, height: 40 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className={`menu-box ${isMenuOpen ? "open" : ""}`}>
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
