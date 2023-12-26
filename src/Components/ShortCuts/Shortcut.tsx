import * as React from "react";
import { LazyLoad } from "../CommonComponents";
import { ShortcutComponent } from "./Shortcut.types";

const LazyShortcut = React.lazy(
  () =>
    import(/* webpackChunkName: "Shortcut" */ "./ShortcutInternal")
);

export const Shortcut: ShortcutComponent = (props) => {
  return (
    <LazyLoad>
      <LazyShortcut {...props} />
    </LazyLoad>
  );
};
