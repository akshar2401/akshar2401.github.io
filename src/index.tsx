import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Constants } from "./Misc";
import { PortfolioRoot } from "./Components/PortfolioRoot";

const rootDomElement = document.getElementById(Constants.PortfolioRootDivID);
const root = ReactDOM.createRoot(rootDomElement);
root.render(<PortfolioRoot />);
