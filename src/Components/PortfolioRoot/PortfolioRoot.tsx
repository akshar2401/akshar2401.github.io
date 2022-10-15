import * as React from "react";

const Navigation = React.lazy(
  () => import(/* webpackChunkName: "Navigation" */ "../Navigation/Navigation")
);

const Footer = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ "../Footer/Footer")
);

const PortfolioRoot: React.FC<any> = (props) => {
  return (
    <React.Suspense>
      <Navigation />
      <Footer />
    </React.Suspense>
  );
};

export default PortfolioRoot;
