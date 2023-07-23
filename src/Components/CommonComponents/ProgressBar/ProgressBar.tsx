import * as React from "react";
import LazyLoad from "../LazyLoadComponent";
import { ProgressBarInternalComponent } from "./ProgressBar.types";

const LazyProgressBar = React.lazy(
  () => import(/* webpackChunkName: "ProgressBar" */ "./ProgressBarInternal")
);

export const ProgressBarComponent: ProgressBarInternalComponent = (props) => {
  return (
    <LazyLoad>
      <LazyProgressBar {...props} />
    </LazyLoad>
  );
};
