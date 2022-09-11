import * as React from "react"; 
import * as ReactDOM from "react-dom";
import Constants from "./Constants";


const PortfolioRoot = React.lazy(() => import(/* webpackChunkName: "PortfolioRoot" */"./Components/PortfolioRoot/PortfolioRoot"));
ReactDOM.render(<React.Suspense><PortfolioRoot /></React.Suspense>, document.getElementById(Constants.PortfolioRootDivID));

