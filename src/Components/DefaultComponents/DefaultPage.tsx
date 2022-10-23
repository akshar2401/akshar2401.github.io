import * as React from "react";
import { DefaultNavBarItems } from "../Navigation/Navbar.Constants";
import { useLocation } from "react-router";

const PageNotFound = React.lazy(
  () => import(/* webpackChunkName: "PageNotFound" */ "./PageNotFound")
);

const WorkInProgressComponent = React.lazy(
  () => import(/* webpackChunkName: "WorkInProgress" */ "./WorkInProgress")
);

const DefaultPage: React.FC<any> = () => {
  const location = useLocation();
  const isAValidRoute = DefaultNavBarItems.some(
    (navItem) => location.pathname === navItem.route
  );

  if (isAValidRoute) {
    return (
      <React.Suspense>
        <WorkInProgressComponent />
      </React.Suspense>
    );
  } else {
    return (
      <React.Suspense>
        <PageNotFound />
      </React.Suspense>
    );
  }
};

export default DefaultPage;
