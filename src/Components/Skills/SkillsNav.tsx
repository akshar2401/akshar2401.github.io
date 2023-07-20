import * as React from "react";

const LazySkillsNav = React.lazy(
  () => import(/* webpackChunkName: "SkillsNav" */ "./SkillsNavInternal")
);

const SkillsNav: React.FC<any> = () => {
  return (
    <React.Suspense>
      <LazySkillsNav />
    </React.Suspense>
  );
};
export default SkillsNav;
