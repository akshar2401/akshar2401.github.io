import * as React from "react";
import { Constants } from "../../Misc";

export enum ShortcutType {
  Linkedin = "Linkedin",
  Github = "Github",
  Resume = "Resume",
  SourceCode = "Source Code",
  Email = "Email",
}

type ShortcutsLookupType = {
  [key in ShortcutType]: {
    type: ShortcutType;
    url: string;
    description: string;
    route: string;
  };
};

export const ShortcutsLookup: ShortcutsLookupType = {
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
  [ShortcutType.Email]: {
    type: ShortcutType.Email,
    url: Constants.EmailURL,
    description: "Email Client on your device",
    route: "/email",
  },
};

export const Shortcuts = Object.values(ShortcutsLookup);

export type ShortcutProps = {
  shortcutType: ShortcutType;
};

export type ShortcutComponent = React.FC<ShortcutProps>;
