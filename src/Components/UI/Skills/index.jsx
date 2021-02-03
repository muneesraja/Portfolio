import React from "react";
import Skill from "./Skill";
import "./skills.scss";
const index = ({ skills }) => {
  return (
    <div className="bg-theme-gray">
      <div className="container">
        <div className="max-height d-flex flex-column justify-content-center">
          <h3 className="text-center mb-5 text-theme-yellow head-line">
            Skills
          </h3>
          <div className="skill-desc">
            <Skill skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
