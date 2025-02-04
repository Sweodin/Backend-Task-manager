import React from "react";
import logo from "../../assets/TLT-Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/*----- Logo and title -----*/}

        <a href="/" className="navbar-logo">
          <img src={logo} alt="Personal Task Manager" />
        </a>
        <span className="navbar-title">Personal Task Manager</span>

        {/*----- Navigation links -----*/}

        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/task">Tasks</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
