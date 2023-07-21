import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyDefaultPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "DefaultPage" */ "../DefaultComponents/DefaultPageInternal"
    )
);

export const DefaultPage: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyDefaultPage />
    </LazyLoad>
  );
};
