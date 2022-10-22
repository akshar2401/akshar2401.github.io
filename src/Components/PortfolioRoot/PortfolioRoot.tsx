import * as React from "react";
import { Route } from "../../../node_modules/react-router/dist/index";
import { Routes } from "../../../node_modules/react-router-dom/dist/index";

const Navigation = React.lazy(
  () => import(/* webpackChunkName: "Navigation" */ "../Navigation/Navigation")
);

const Footer = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ "../Footer/Footer")
);

const About = React.lazy(
  () => import(/* webpackChunkName: "About" */ "../About/About")
);

const PageNotFound = React.lazy(
  () =>
    import(
      /* webpackChunkName: "PageNotFound" */ "../PageNotFound/PageNotFound"
    )
);

const PortfolioRoot: React.FC<any> = (props) => {
  return (
    <React.Suspense>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense>
              <PageNotFound />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </React.Suspense>
  );
};

export default PortfolioRoot;
