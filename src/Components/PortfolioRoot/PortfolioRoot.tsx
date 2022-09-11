import * as React from "react";

const Navigation = React.lazy(
  () => import(/* webpackChunkName: "Navigation" */ "../Navigation/Navigation")
);

const PortfolioRoot: React.FC<any> = (props) => {
  return (
    <React.Suspense>
      <Navigation />
    </React.Suspense>
  );
};

export default PortfolioRoot;
