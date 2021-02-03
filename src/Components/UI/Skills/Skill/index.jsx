import React from "react";

const index = (props) => {
  return (
    <>
      {props.skills.map((skill, index) => {
        return (
          <div
            className="row text-center d-flex justify-content-center "
            key={index}
            style={{ height: "2rem" }}
          >
            <div className="col-4 align-self-center">
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-theme-yellow progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: `${skill.skillLevel}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 def-paragraph align-self-center">
              {skill.name}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default index;
