import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeSwitcher from "./ThemeSwitcher";

const NAV_LINKS = [
  { to: "heroSection", label: "Home" },
  { to: "Experience", label: "Experience" },
  { to: "MyPortfolio", label: "Projects" },
  { to: "Skills", label: "Skills" },
  { to: "AboutMe", label: "About" },
  { to: "Game", label: "Arcade" },
];

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive((v) => !v);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Link
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar--logo--text"
        >
          Dheeraj<span className="navbar--logo--dot">.</span>
        </Link>
      </div>

      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={link.to}
                className="navbar--content"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar--right">
        <ThemeSwitcher />
        <a
          href="./Dheerajreddy.pdf"
          download="Dheeraj_Reddy_Resume.pdf"
          className="btn btn-primary navbar--resume"
        >
          ⬇ Résumé
        </a>
        <Link
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-outline-primary navbar--contact-btn"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
