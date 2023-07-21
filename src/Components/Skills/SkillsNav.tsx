import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazySkillsNav = React.lazy(
  () => import(/* webpackChunkName: "SkillsNav" */ "./SkillsNavInternal")
);

const SkillsNav: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazySkillsNav />
    </LazyLoad>
  );
};
export default SkillsNav;
