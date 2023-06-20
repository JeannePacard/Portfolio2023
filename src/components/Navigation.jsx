import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div>
        <button
          className={`header__button nav-btn-js ${
            isNavOpen ? "button-active" : ""
          }`}
          type="button"
          onClick={toggleNav}
        >
          <p>menu</p>
        </button>
        <nav className={`header__nav nav-js ${isNavOpen ? "active" : ""}`}>
          <ul className="header__menu">
            <NavLink to="/">
              <li className="header__menu-item" onClick={toggleNav}>
                home
              </li>
            </NavLink>
            <NavLink to="/works">
              <li className="header__menu-item" onClick={toggleNav}>
                works
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="header__menu-item" onClick={toggleNav}>
                contact
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
