import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Homescreen";

function App() {
  // Reveal sections as they scroll into view (skipped for reduced-motion users).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const sections = Array.from(document.querySelectorAll("main section"));
    sections.forEach((s) => s.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
