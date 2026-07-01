"use client";

import { useEffect } from "react";

// This is a client component because the Bootstrap navbar toggle
// (the hamburger button on mobile) needs Bootstrap's JS to work.
export default function Navbar() {
  useEffect(() => {
    // bootstrap's JS bundle touches the "window" object, so it
    // can only be imported in the browser, not on the server.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-soft fixed-top">
      <div className="container">
        <a className="navbar-brand brand-logo fw-bold" href="#home">
          Webion<span className="text-accent">Technology</span>
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
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
