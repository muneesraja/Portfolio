import React from "react";

const index = (props) => {
  return (
    <>
      {props.skills.map((skill, index) => {
        return (
          <div className="row text-center" key={index}>
            <div className="col-6">{skill.skillLevel}</div>
            <div className="col-6 def-paragraph">{skill.name}</div>
          </div>
        );
      })}
    </>
  );
};

export default index;
