import * as React from "react";
import { InPageNavigationInternalComponent } from "./InPageNavigation.types";
import LazyLoad from "../LazyLoadComponent";

const LazyInPageNavigation = React.lazy(
  () =>
    import(
      /* webpackChunkName: "InPageNavigation" */ "./InPageNavigationInternal"
    )
);

export const InPageNavigation: InPageNavigationInternalComponent = (props) => {
  return (
    <LazyLoad>
      <LazyInPageNavigation {...props} />
    </LazyLoad>
  );
};
