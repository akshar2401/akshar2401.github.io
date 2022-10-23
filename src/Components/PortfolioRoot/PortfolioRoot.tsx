import * as React from "react";
import { Route } from "../../../node_modules/react-router/dist/index";
import {
  BrowserRouter,
  Routes,
} from "../../../node_modules/react-router-dom/dist/index";

const Navigation = React.lazy(
  () => import(/* webpackChunkName: "Navigation" */ "../Navigation/Navigation")
);

const Footer = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ "../Footer/Footer")
);

const About = React.lazy(
  () => import(/* webpackChunkName: "About" */ "../About/About")
);

const DefaultPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "DefaultPage" */ "../DefaultComponents/DefaultPage"
    )
);

const Education = React.lazy(
  () => import(/* webpackChunkName: "Education" */ "../Education/Education")
);

const PortfolioRoot: React.FC<any> = () => {
  return (
    <React.Suspense>
      <BrowserRouter>
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
                <DefaultPage />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Suspense>
  );
};

export default PortfolioRoot;
