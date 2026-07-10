import React from "react";

const LINKS = [
  { label: "GitHub", href: "https://github.com/dheerajreddy01" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/-dheerajreddy/" },
  { label: "Email", href: "mailto:reddydheeraj94@gmail.com" },
  { label: "Résumé", href: "./Dheerajreddy.pdf" },
];

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--bar">
        <p className="footer--content">© 2026 Dheeraj Reddy Pandham</p>
        <nav className="footer--social" aria-label="Social links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              download={l.label === "Résumé" ? "Dheeraj_Reddy_Resume.pdf" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
