import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyFooter = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ "../Footer/FooterInternal")
);

export const Footer: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyFooter />
    </LazyLoad>
  );
};
