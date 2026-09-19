import React from "react";
import "./navbar.css";
import { FaGithub } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Tatva UI</div>

      <div className="options">
        <input
          type="text"
          placeholder="Search Documentation"
          aria-label="Search Documentation"
        />

        <button type="button" className="docs">
          Docs
        </button>

        <button type="button" className="icon-button" aria-label="GitHub">
          <a href="https://github.com/Rixhabh-k/tatva-ui" target="_blank">
            <FaGithub />
          </a>
        </button>

        <button type="button">
          <CiLight size={20}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
