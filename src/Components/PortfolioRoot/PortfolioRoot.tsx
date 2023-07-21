import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyPortfolioRoot = React.lazy(
  () =>
    import(/* webpackChunkName: "PortfolioRoot" */ "./PortfolioRootInternal")
);

export const PortfolioRoot: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyPortfolioRoot />
    </LazyLoad>
  );
};
