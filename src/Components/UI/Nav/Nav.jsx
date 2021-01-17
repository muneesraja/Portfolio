import React from "react";
import logo from "./jsLogo.png";
import hamburger from "./NavBar.png";

const Nav = () => {
  return (
    <nav className="navbar bg-theme-black text-white">
      <div className="container-fluid">
        <div>
          <div className="navbar-brand">
            <img src={logo} alt="jsLogo" width="60" height="35" />
          </div>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item me-2 pr-4">
              <img src={hamburger} height="25" width="35" alt="Menu" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
