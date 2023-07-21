import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyWorkInProgressComponent = React.lazy(
  () =>
    import(/* webpackChunkName: "WorkInProgress" */ "./WorkInProgressInternal")
);

export const WorkInProgressComponent: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyWorkInProgressComponent />
    </LazyLoad>
  );
};
