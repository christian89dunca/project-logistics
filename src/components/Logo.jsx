import React from "react";
import "./../styles/Logo.css";

const Logo = (props) => {
  return (
    <div className={props.input}>
      <h1 style={{fontSize: props.input1}}>S.A.M. TRANSPORT</h1>
      <p style={{fontSize: props.input2}}>since 1992</p>
    </div>
  );
};

export default Logo;
