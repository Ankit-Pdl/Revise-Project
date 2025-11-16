// ...existing code...
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Revise</strong>
          <span className="sr-only"> — Game catalogue</span>
        </div>

        <nav className="footer-nav" aria-label="footer">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="footer-actions" aria-hidden={false}>
          <a
            className="social"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            {/* simple GitHub icon */}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.8 2.8 1.2 0-.9.4-1.5.8-1.8-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0012 .5z" />
            </svg>
          </a>

          <a
            className="social"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 5.9c-.6.3-1.2.6-1.9.7.7-.4 1.2-1.1 1.4-1.9-.7.4-1.5.7-2.3.9C18.7 4.9 17.8 4.5 16.8 4.5c-1.9 0-3.4 1.6-3.4 3.5 0 .3 0 .6.1.9-2.8-.1-5.3-1.5-7-3.6-.3.6-.5 1.3-.5 2.1 0 1.3.7 2.4 1.8 3-.5 0-1-.2-1.5-.4 0 1.9 1.4 3.5 3.2 3.9-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.3-3.6 2-5.8 2-.4 0-.8 0-1.2-.1 2.1 1.4 4.6 2.2 7.3 2.2 8.8 0 13.6-7.5 13.6-14v-.6c.9-.6 1.6-1.3 2.1-2.1-.8.4-1.7.6-2.6.7z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} Revise — All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...
