import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Constants from "./Constants";

const PortfolioRoot = React.lazy(
  () =>
    import(
      /* webpackChunkName: "PortfolioRoot" */ "./Components/PortfolioRoot/PortfolioRoot"
    )
);

const rootDomElement = document.getElementById(Constants.PortfolioRootDivID);
const root = ReactDOM.createRoot(rootDomElement);
root.render(
  <React.Suspense>
    <PortfolioRoot />
  </React.Suspense>
);
