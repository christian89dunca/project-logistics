import React from "react";
import Video from "./Video";


const Section3 = () => {
  return (
    <div id="how-it-works" >
      <div className="text-container">
        <h2>HOW IT WORKS</h2>
        <div className="underline"></div>
      </div>
      <div>
        <div className="video-placeholder">
        <Video src="https://www.youtube.com/embed/V1LK1IyYqDc"/>
        </div>
      </div>
      <div className="steps">
        <ul>
          <li>
            <span className="badge">1</span>Lorem ipsum dolor sit amet
          </li>
          <li>
            <span className="badge">2</span>Lorem ipsum dolor sit amet
          </li>
          <li>
            <span className="badge">3</span>Lorem ipsum dolor sit amet
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
