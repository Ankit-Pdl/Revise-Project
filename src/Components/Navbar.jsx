// ...existing code...
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

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

          <ul className="nav-list">
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
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
              <li onClick={toggle}>About</li>
              <li onClick={toggle}>Products</li>
              <li onClick={toggle}>Services</li>
              <li onClick={toggle}>Contact</li>
              <li onClick={toggle}>Blog</li>
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
