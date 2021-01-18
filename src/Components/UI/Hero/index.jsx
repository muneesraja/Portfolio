import React from "react";
import developerLogo from "./developer.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="bg-theme-gray hero-section">
      <div className="container d-flex justify-content-around">
        <div className="row d-flex align-items-center text-center mb-4">
          <div className="col-md-6 col-sm-12 ">
            <p className="def-paragraph">
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
