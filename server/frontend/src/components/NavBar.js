import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-md">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Moviewer
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="./movie" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;