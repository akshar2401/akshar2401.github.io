import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazySkills = React.lazy(
  () => import(/* webpackChunkName: "Skills"*/ "./SkillsInternal")
);

const Skills: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazySkills />
    </LazyLoad>
  );
};

export default Skills;
