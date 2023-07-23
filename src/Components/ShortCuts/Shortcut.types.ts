import * as React from "react";
import { Constants } from "../../Misc";

export enum ShortcutType {
  Linkedin = "Linkedin",
  Github = "Github",
  Resume = "Resume",
  SourceCode = "Source Code",
}

export const ShortcutsLookup = {
  [ShortcutType.Linkedin]: {
    type: ShortcutType.Linkedin,
    url: Constants.LinkedinURL,
    description: "Linkedin",
    route: "/linkedin",
  },
  [ShortcutType.Github]: {
    type: ShortcutType.Github,
    url: Constants.GithubURL,
    description: "Github",
    route: "/github",
  },
  [ShortcutType.Resume]: {
    type: ShortcutType.Resume,
    url: Constants.ResumeUrl,
    description: "Resume",
    route: "/resume",
  },
  [ShortcutType.SourceCode]: {
    type: ShortcutType.SourceCode,
    url: Constants.SourceCodeURL,
    description: "Source Code",
    route: "/source",
  },
};

export const Shortcuts = Object.values(ShortcutsLookup);

export type ShortcutProps = {
  shortcutType: ShortcutType;
};

export type ShortcutComponent = React.FC<ShortcutProps>;
