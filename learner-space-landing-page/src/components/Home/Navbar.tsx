import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onOpenPopup: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPopup }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active link logic
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          const id = htmlSection.getAttribute("id");
          if (id) setActiveLink(`#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  return (
    <nav className={scrolled ? "scrolled" : ""} id="navbar">
      <div className="logo">
        <span>Learner</span> <span>Space</span>
      </div>
      <ul className="nav-links">
        {["#home", "#courses", "#explore", "#blog"].map((link) => (
          <li key={link}>
            <a
              href={link}
              className={activeLink === link ? "active" : ""}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link
                .replace("#", "")
                .toUpperCase()
                .replace("COURSES", "HOW IT WORKS")
                .replace("BLOG", "REVIEWS")}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}
          >
            CONTACT
          </a>
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="btn-filled" onClick={onOpenPopup}>
          Get Started
        </button>
        <a href="https://edtech.learnerspace.in/" className="btn-outline">
          Edtech
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
