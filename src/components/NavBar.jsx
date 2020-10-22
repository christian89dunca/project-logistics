import React from "react";
// import { Link } from "react-router-dom";
import {Link} from "react-scroll"
import "./../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul className="nav">
              <li>
                
              <Link activeClass="active" to="our-services" spy={true} smooth={true} duration={1000}>Our services</Link></li>
              
              <li>
              <Link activeClass="active" to="how-it-works" spy={true} smooth={true} duration={1000}>How does it work</Link></li>
              <li>
              <Link activeClass="active" to="accreditaion" spy={true} smooth={true} duration={1000}>About Us</Link></li>
              <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Contact</Link></li>
            </ul>
            <ul className="SoMe">
              <li>
                <a className="icon linkedin" href="#"></a>
              </li>
              <li>
                <a className="icon facebook" href="#"></a>
              </li>
              <li>
                <a className="icon messenger" href="#"></a>
              </li>
              <li>
                <a className="icon email" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
