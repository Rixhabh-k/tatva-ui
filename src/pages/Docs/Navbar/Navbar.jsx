import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Tatva UI</div>
      <div className="options">
        <input type="text" placeholder="Search Documentation" />
        <button>Docs</button>
        <button>Github</button>
        <button>Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
