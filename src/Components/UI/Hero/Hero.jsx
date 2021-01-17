import React from "react";
import developerLogo from "./developer.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="bg-theme-gray hero-section">
      <div className="container">
        <div className="row text-white  d-flex align-items-center text-center ">
          <div className="col-md-6 col-xl-6 col-sm-12">
            <p>
              Hello I’m
              <span className="text-theme-yellow "> Munees raja</span>, I’m a
              javaScript developer.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img src={developerLogo} className="dev-svg" alt="Developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
