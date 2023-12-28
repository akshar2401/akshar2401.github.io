import * as React from "react";
import { DefaultPageContent } from "../DefaultComponents";
import { ShortcutComponent, ShortcutsLookup } from "./Shortcut.types"

const ShortcutInternal: ShortcutComponent = (props) => {
  const shortcut = ShortcutsLookup[props.shortcutType];
  React.useEffect(() => {
    window.location.replace(shortcut.url);
  }, []);

  return (
    <DefaultPageContent>Opening {shortcut.description}...</DefaultPageContent>
  );
};

export default ShortcutInternal;
