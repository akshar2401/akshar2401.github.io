import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyAbout = React.lazy(
  () => import(/* webpackChunkName: "About" */ "./AboutInternal")
);

export const About: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyAbout />
    </LazyLoad>
  );
};
