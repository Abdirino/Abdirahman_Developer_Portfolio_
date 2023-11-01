import React, { useState } from "react";
import "./navbar.css";

import NavIcon from "../../Assets/Images/A-Footer.png";
import { Link, NavLink } from "react-router-dom";
import TextAnimation from "../TextAnimation/TextAnimation";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const sentence = "Home".split("");
  const sentence2 = "About".split("");
  const sentence3 = "Portfolio".split("");
  const sentence4 = "Contact".split("");
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
                  {sentence.map((letter, index) => {
                    return <TextAnimation key={index}>{letter}</TextAnimation>;
                  })}
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
                  {sentence2.map((letter, index) => {
                    return <TextAnimation key={index}>{letter}</TextAnimation>;
                  })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {sentence3.map((letter, index) => {
                    return <TextAnimation key={index}>{letter}</TextAnimation>;
                  })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {sentence4.map((letter, index) => {
                    return <TextAnimation key={index}>{letter}</TextAnimation>;
                  })}
                </NavLink>
              </li>

              {/* <li className="nav-links">Blogs</li> */}
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
