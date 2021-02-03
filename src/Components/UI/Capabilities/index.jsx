import React from "react";
import react_logo from "./Files/ReactJS.png";
import express_logo from "./Files/ExpressJS.png";
import github_logo from "./Files/github-logo.png";
import "./Capabilities.scss";

const index = () => {
  return (
    <div className="row max-height cap-height bg-theme-black align-items-center">
      <h3 className="head-line cap-head text-theme-yellow text-center">
        What I'm Capable Of !
      </h3>
      <div className="">
        <div className="row justify-content-around">
          <div className="col-md-3 text-center">
            <div className="card text-center bg-theme-gray text-white cards border-0">
              <div className="card-body text-center">
                <img
                  src={react_logo}
                  width={100}
                  alt="ReactLogo"
                  className="card-title"
                ></img>
                <p className="card-text pt-5 text-justify">
                  I can go through some of the best practices that I think can
                  help build better reusable components in React.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center bg-theme-gray text-white cards border-0">
              <div className="card-body">
                <img
                  src={express_logo}
                  width={200}
                  alt="ReactLogo"
                  className="card-title mt-3"
                ></img>
                <p className="card-text pt-5 text-justify">
                  With express.js I can able to build minimal and flexible REST
                  API that is scalable of needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center bg-theme-gray text-white cards border-0">
              <div className="card-body">
                <img
                  src={github_logo}
                  width={100}
                  alt="ReactLogo"
                  className="card-title"
                ></img>
                <p className="card-text text-justify pt-5">
                  Git is a source control system that allows you to track
                  versions of your work in project containers called
                  repositories. With git I can directly collaborate with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
