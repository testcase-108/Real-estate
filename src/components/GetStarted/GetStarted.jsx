import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Residences</span>
          <span className="secondaryText">
            Find super attractive prices from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:krishnaforwork18@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
