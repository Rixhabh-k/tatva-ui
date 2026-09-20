import React from "react";
import "./navbar.css";

const DocsNavbar = () => {
  return (
    <header className="docs-navbar">
      <div className="docs-navbar-container">

        {/* Logo */}
        <a href="/" className="docs-navbar-logo">
          <img
            src="../../../../public/images/logo (1).png"
            alt="Vengeance UI"
            className="docs-navbar-logo-image"
          />
          <h1 className="docs-logo-text">Tatva UI</h1>
        </a>

        {/* Desktop Search */}
        <div className="docs-navbar-search">
          <svg
            className="docs-navbar-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            type="text"
            placeholder="Search documentation..."
          />

          <div className="docs-navbar-search-shortcut">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="docs-navbar-links">
          <a href="/templates" className="docs-navbar-link">
            Templates
          </a>

          <a href="/docs" className="docs-navbar-link">
            Docs
          </a>

          {/* <a
            href="https://github.com/"
            className="docs-navbar-github"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="docs-navbar-github-icon"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
            </svg>

            <span className="docs-navbar-star">★</span>
            <span className="docs-navbar-star-count">1.2K</span>
          </a> */}
        </nav>

        {/* Theme */}
        <button
          className="docs-navbar-theme"
          aria-label="Toggle theme"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <button
          className="docs-navbar-menu"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default DocsNavbar;