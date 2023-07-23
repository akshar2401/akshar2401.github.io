import * as React from "react";
import { ProgressBarComponent } from "../CommonComponents";
import { SkillCategory, SkillsCollection } from "./Skills.Constants";
import { SkillsContainerProps } from "./Skills.types";

const SkillsContainer: React.FC<SkillsContainerProps> = (props) => {
  const skills = props.category
    ? SkillsCollection.filter((skill) =>
        skill.categories.includes(props.category as SkillCategory)
      )
    : SkillsCollection;
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <div
            key={skill.skillDescription}
            style={{ marginTop: index > 0 ? "20px" : "0px" }}
          >
            <div
              style={{ width: "100%", fontSize: "18px" }}
              className="text-light text-center mb-1"
            >
              {skill.skillDescription}
            </div>
            <ProgressBarComponent
              current={skill.skillProficiency}
            ></ProgressBarComponent>
          </div>
        );
      })}
    </>
  );
};

export default SkillsContainer;
