import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Constants from "./Constants";

const PortfolioRoot = React.lazy(
  () =>
    import(
      /* webpackChunkName: "PortfolioRoot" */ "./Components/PortfolioRoot/PortfolioRoot"
    )
);

const root = ReactDOM.createRoot(
  document.getElementById(Constants.PortfolioRootDivID)
);
root.render(
  <React.Suspense>
    <PortfolioRoot />
  </React.Suspense>
);
