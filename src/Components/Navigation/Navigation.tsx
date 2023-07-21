import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyNavigation = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Navigation" */ "../Navigation/NavigationInternal"
    )
);

export const Navigation: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyNavigation />
    </LazyLoad>
  );
};
