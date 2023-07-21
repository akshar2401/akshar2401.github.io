import type { INavbarItem } from "./Navbar.types";

export const DefaultNavBarItems: ReadonlyArray<INavbarItem> = [
  {
    name: "About",
    route: "/",
  },
  {
    name: "Education",
    route: "/education",
  },
  {
    name: "Skills",
    route: "/skills",
  },
  {
    name: "Work Experience",
    route: "/workexperience",
  },
  {
    name: "Projects",
    route: "/projects",
  },
];
