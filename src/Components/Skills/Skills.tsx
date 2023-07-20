import * as React from "react";

const LazySkills = React.lazy(
  () => import(/* webpackChunkName: "SKills"*/ "./SkillsInternal")
);

const Skills: React.FC<any> = () => {
  return (
    <React.Suspense>
      <LazySkills />
    </React.Suspense>
  );
};

export default Skills;
