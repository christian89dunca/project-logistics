import React from "react";
import Logo from "./Logo";

const Section6 = () => {
  return (
    <div id="about-us">
      <div className="section6">
      <div className="text-container S6">
        <div></div>
        <Logo input="logo-small" input1="1.2rem" input2="0.8rem"/>
        <h3>About Us</h3>
        <p>We make grate transport and take care of your valuables</p>
        <h3>Contact Us</h3>
        <p>
          <span className="iconS6 phoneS6"></span>07 571 492 29
        </p>
        <p>
          <span className="iconS6 emailS6"></span>samtransport@gmail.com
        </p>
        <h4>Subscribe to Newsletter</h4>
        <form className="form">
          <input type="text" placeholder="Your e-mail"/>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Section6;
