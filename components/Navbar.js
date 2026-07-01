"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      const sections = ["home", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Webion<span> Technology</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "home" ? "active" : ""}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "services" ? "active" : ""}`} href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "portfolio" ? "active" : ""}`} href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}