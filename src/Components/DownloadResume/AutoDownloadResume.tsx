import * as React from "react";
import { LazyLoad } from "../CommonComponents";

const LazyAutoDownloadResume = React.lazy(
  () =>
    import(
      /* webpackChunkName: "AutoDownloadResume" */ "./AutoDownloadResumeInternal"
    )
);

export const AutoDownloadResume: React.FC<any> = () => {
  return (
    <LazyLoad>
      <LazyAutoDownloadResume />
    </LazyLoad>
  );
};
