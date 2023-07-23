import * as React from "react";
import { LazyLoad } from "../CommonComponents";
import { ShortcutComponent } from "./Shortcut.types";

const LazyShortcut = React.lazy(
  () =>
    import(/* webpackChunkName: "AutoDownloadResume" */ "./ShortcutInternal")
);

export const Shortcut: ShortcutComponent = (props) => {
  return (
    <LazyLoad>
      <LazyShortcut {...props} />
    </LazyLoad>
  );
};
