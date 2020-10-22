import React, { Component } from "react";
import Logo from "./Logo";
import {Link} from "react-scroll"

const Section1 = () => {
  return (
    <div id="home">
      <div className="section1">
      <div className="overlayer">
        <Logo input="logo"/>
        <div className="container">
          <div className="text-container">
            <p>SAVE TIME AND MONEY - UP TO 50% OFF STANDARD RATES</p>
            <h1>COMPLETE TRANSPORT AND DELIVERY</h1>
            <p className="orange">YOUR GOOD ARE SAFE WITH US</p>
          </div>
          <Link className="button" activeClass="active" to="about-us" spy={true} smooth={true} duration={1000}>CONTACT US</Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section1;
