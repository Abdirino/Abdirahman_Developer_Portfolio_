import React, { useState } from "react";
import "./navbar.css";

import NavIcon from "../../Assets/Images/A-Footer.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  // const close = () => { setClick(false) };

  return (
    <>
      <div className="Navbar">
        <div className="navbar" onClick={(e) => e.stopPropagation}>
          <div className="left">
            <div className="nav-icon" onClick={handleClick}>
              <i
                className={
                  click
                    ? "fa-regular fa-circle-xmark"
                    : "fa-solid fa-bars-staggered"
                }
              ></i>
            </div>
            <NavLink to="/">
              <div className="nav-logo">
                <img src={NavIcon} alt="" />
              </div>
            </NavLink>
            <ul className={click ? "nav-items active" : "nav-items"}>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>

              <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Portfolio
              </NavLink>

              <li className="nav-links">Blogs</li>

              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contacts
              </NavLink>
            </ul>
          </div>

          <div className="right">
            <Link to="/contact">
              <button className="button">
                <span>HIRE ME</span>
                <i className="fa-solid fa-angles-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
