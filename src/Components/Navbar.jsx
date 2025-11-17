import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  // Theme state persisted to localStorage and applied to the root element
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      <div className="Navbar-Container">
        <div className="nav-inner">
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            onClick={toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-sidebar"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Theme toggle - toggles whole page */}
          <h3 className="logo">
            <Link to="/">APY NOVA</Link>
          </h3>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <ul className="nav-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
          </ul>
        </div>
      </div>

      <aside
        id="site-sidebar"
        className={`sidebar ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="sidebar-inner">
          <button
            className="sidebar-close"
            onClick={toggle}
            aria-label="Close sidebar"
          >
            ×
          </button>
          <nav>
            <ul>
              <Link onClick={toggle} to="/">
                Home
              </Link>
              <Link onClick={toggle} to="/about">
                About
              </Link>
              <Link onClick={toggle} to="/contact">
                Contact
              </Link>
              <Link onClick={toggle} to="/products">
                Products
              </Link>
            </ul>
          </nav>
        </div>
      </aside>

      {open && <div className="overlay" onClick={toggle} aria-hidden="true" />}
    </>
  );
};

export default Navbar;
// ...existing code...
