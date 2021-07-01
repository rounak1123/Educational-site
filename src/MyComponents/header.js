import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Link } from "react-scroll";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className="logo1">
              <img
                src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg"
                className="logoimg1"
              ></img>{" "}
              <span class="heade1">MISSIONED</span>
            </div>
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to={"/"}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Link
                  to={window.location.pathname == "/" ? "home1" : "homex1"}
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Scroll to top
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Link to={"deals12"} spy={true} smooth={true} duration={300}>
                  Store
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Link to="classesid" spy={true} smooth={true} duration={300}>
                  Classes
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Link to="refferals" spy={true} smooth={true} duration={300}>
                  Refferals
                </Link>
              </NavLink>
            </li>{" "}
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Link to="home34" spy={true} smooth={true} duration={300}>
                  Scroll to bottom
                </Link>
              </NavLink>
            </li>{" "}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
