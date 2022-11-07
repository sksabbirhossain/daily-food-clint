import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${styles.mainNav}`}>
      <div className="container">
        <Link className="navbar-brand p-0" to="/">
          <div className="d-none d-sm-flex">
            <img
              src={logo}
              className={`${styles.logo}`}
              alt="daily food logo"
            />
          </div>
          <div className="d-flex d-sm-none">
            <img
              src={logo}
              className={`${styles.mobileLogo}`}
              alt="daily food logo"
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            mobileMenu ? "" : styles.mobileMenu
          }`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`${styles.navLink}`} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLink}`} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLink}`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLink}`} to="/my-reviews">
                My reviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLink}`} to="/add-service">
                Add service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLink}`} to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <span className={`${styles.navLink}`}>LogOut</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
