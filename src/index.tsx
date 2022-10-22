import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Constants from "./Constants";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
const PortfolioRoot = React.lazy(
  () =>
    import(
      /* webpackChunkName: "PortfolioRoot" */ "./Components/PortfolioRoot/PortfolioRoot"
    )
);

const rootDomElement = document.getElementById(Constants.PortfolioRootDivID);
const root = ReactDOM.createRoot(rootDomElement);
root.render(
  <BrowserRouter>
    <React.Suspense>
      <PortfolioRoot />
    </React.Suspense>
  </BrowserRouter>
);
