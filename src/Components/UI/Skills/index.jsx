import React from "react";
import Skill from "./Skill";

const index = (props) => {
  return (
    <div className="bg-theme-gray">
      <div className="container max-height">
        <h3 className="text-theme-yellow head-line text-center pt-5">Skills</h3>

        <div className="skills">
          <Skill skills={props.skills} />
        </div>
      </div>
    </div>
  );
};

export default index;
