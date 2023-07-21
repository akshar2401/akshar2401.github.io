import * as React from "react";

const LazyLoad: React.FC<{
  children: any[] | any;
  fallback?: React.ReactNode;
}> = (props) => {
  return (
    <React.Suspense fallback={props.fallback}>{props.children}</React.Suspense>
  );
};

export default LazyLoad;
