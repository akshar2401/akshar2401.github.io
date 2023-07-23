import * as React from "react";
import { LazyLoad } from "../CommonComponents";
import { SkillNavComponent } from "./Skills.types";

const LazySkillsNav = React.lazy(
  () => import(/* webpackChunkName: "SkillsNav" */ "./SkillsNavInternal")
);

const SkillsNav: SkillNavComponent = (props) => {
  return (
    <LazyLoad>
      <LazySkillsNav {...props} />
    </LazyLoad>
  );
};
export default SkillsNav;
