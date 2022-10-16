import * as React from "react";

const Navigation = React.lazy(
  () => import(/* webpackChunkName: "Navigation" */ "../Navigation/Navigation")
);

const Footer = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ "../Footer/Footer")
);

const About = React.lazy(
    () => import(/* webpackChunkName: "About" */ "../About/About")
);

const PortfolioRoot: React.FC<any> = (props) => {
  return (
    <React.Suspense>
      <Navigation />
      <About />
      <Footer />
    </React.Suspense>
  );
};

export default PortfolioRoot;
