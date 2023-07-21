import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyNavbar = React.lazy(
  () => import(/* webpackChunkName: "Navbar" */ "./NavbarInternal")
);

export const Navbar: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyNavbar />
    </LazyLoad>
  );
};
