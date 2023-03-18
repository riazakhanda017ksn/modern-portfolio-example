import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <img src="https://i.ibb.co/db5Wtfz/download.png" alt="" />
        <div className="banner-content">
          <h2>Hello </h2>
          <h3>
            I'm a <span>Mernstack</span> Developer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
