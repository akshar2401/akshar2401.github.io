import * as React from "react";
import { NavbarItems } from "./Navbar.types";
const defaultNavBarItems: NavbarItems = new NavbarItems([
  {
    name: "About",
    isActive: true,
  },
  {
    name: "Education",
  },
  {
    name: "Skills",
  },
  {
    name: "Work Experience",
  },
  {
    name: "Projects",
  },
]);
const Navbar: React.FC<any> = (_) => {
  const [navbarItems, updateNavBarItems] = React.useState(defaultNavBarItems);

  const handleNavbarItemClick = (activeToBeIndex: number) => {
    const currentActiveIndex = navbarItems.navBarItems.findIndex(
      (item) => item.isActive
    );
    if (currentActiveIndex !== -1) {
      navbarItems.navBarItems[currentActiveIndex].isActive = false;
    }
    navbarItems.navBarItems[activeToBeIndex].isActive = true;
    updateNavBarItems(new NavbarItems(navbarItems.navBarItems));
  };

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navbarItems.navBarItems.map((navbarItem, currentIndex) => {
            const navItemTextClasses = navbarItem.isActive
              ? "nav-link active"
              : "nav-link";
            return (
              <li
                className="nav-item"
                key={navbarItem.name}
                style={{ cursor: "pointer" }}
                onClick={() => handleNavbarItemClick(currentIndex)}
              >
                <span className={navItemTextClasses} aria-current="page">
                  {navbarItem.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
