import * as React from "react";

export interface IPortfolioGlobalState {}

export interface IPortfolioContext {
  state: IPortfolioGlobalState;
  updatGlobalState: React.Dispatch<React.SetStateAction<IPortfolioGlobalState>>;
}
const PortfolioContext = React.createContext<IPortfolioContext>({
  state: { isOnUnknownPage: false },
  updatGlobalState(this: IPortfolioContext, newState) {
    this.state = { ...this.state, ...newState };
  },
});

export default PortfolioContext;
