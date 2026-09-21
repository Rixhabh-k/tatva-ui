import React, { useEffect, useState } from "react";
import docs from "../../../data/doc";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const DocsNavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  const componentDocs = Object.entries(docs).filter(
    ([key]) => key !== "installation",
  );

  const filteredDocs = componentDocs.filter(([key, item]) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return true;

    return (
      key.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <header className="docs-navbar">
        <div className="docs-navbar-container">
          {/* Logo */}
          <a href="/" className="docs-navbar-logo">
            <img
              src="../../../../public/images/logo (1).png"
              alt="Tatva UI"
              className="docs-navbar-logo-image"
            />
            <h1 className="docs-logo-text">Tatva UI</h1>
          </a>

          {/* Desktop Search */}
          <div
            className="docs-navbar-search"
            onClick={() => setSearchOpen(true)}
          >
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

            <input type="text" placeholder="Search documentation..." readOnly />

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
          </nav>

          {/* Theme */}
          <button className="docs-navbar-theme" aria-label="Toggle theme">
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
          <button className="docs-navbar-menu" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="docs-search-overlay"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="docs-search-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="docs-search-modal-input">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                autoFocus
                type="text"
                placeholder="Search components, templates, docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Links */}
            <div className="docs-search-content">
              <div className="docs-search-section-title">Quick Links</div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">▦</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Blocks</div>

                  <div className="docs-search-item-description">
                    Hero sections, backgrounds, and larger UI sections.
                  </div>
                </div>

                <span className="docs-search-item-type">Library</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">⌂</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Home</div>

                  <div className="docs-search-item-description">
                    Tatva UI landing page and featured components.
                  </div>
                </div>

                <span className="docs-search-item-type">Page</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">✧</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Templates</div>

                  <div className="docs-search-item-description">
                    Portfolio and product templates with screenshots and links.
                  </div>
                </div>

                <span className="docs-search-item-type">Page</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">▤</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Docs</div>

                  <div className="docs-search-item-description">
                    Start browsing component documentation.
                  </div>
                </div>

                <span className="docs-search-item-type">Page</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">&lt;/&gt;</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Snippets</div>

                  <div className="docs-search-item-description">
                    Small reusable component snippets and interactions.
                  </div>
                </div>

                <span className="docs-search-item-type">Library</span>
              </div>

              {/* Components */}
              <div className="docs-search-divider"></div>

              <div className="docs-search-section-title">Components</div>

              {filteredDocs.length > 0 ? (
                filteredDocs.map(([key, item]) => (
                  <div
                    className="docs-search-item"
                    key={key}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                      navigate(`/docs/${key}`);
                    }}
                  >
                    <div className="docs-search-item-icon">◇</div>

                    <div className="docs-search-item-info">
                      <div className="docs-search-item-title">{item.title}</div>

                      <div className="docs-search-item-description">
                        {item.description}
                      </div>
                    </div>

                    <span className="docs-search-item-type">Component</span>
                  </div>
                ))
              ) : (
                <div className="docs-search-no-results">No results found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocsNavbar;
