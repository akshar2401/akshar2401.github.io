import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyDownloadResume = React.lazy(
  () =>
    import(
      /* webpackChunkName: "DownloadResume" */ "../DownloadResume/DownloadResumeInternal"
    )
);

export const DownloadResume: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyDownloadResume />
    </LazyLoad>
  );
};
