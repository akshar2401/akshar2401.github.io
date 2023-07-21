import * as React from "react";
import { DefaultNavBarItems } from "../Navigation";
import { useLocation } from "react-router";
import { PageNotFound } from "./PageNotFound";
import { WorkInProgressComponent } from "./WorkInProgress";

const DefaultPageInternal: React.FC<any> = () => {
  const location = useLocation();
  const isAValidRoute = DefaultNavBarItems.some(
    (navItem) => location.pathname === navItem.route
  );

  if (isAValidRoute) {
    return <WorkInProgressComponent />;
  } else {
    return <PageNotFound />;
  }
};
export default DefaultPageInternal;
