import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyPageNotFound = React.lazy(
  () => import(/* webpackChunkName: "PageNotFound" */ "./PageNotFoundInternal")
);

export const PageNotFound: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyPageNotFound />
    </LazyLoad>
  );
};
