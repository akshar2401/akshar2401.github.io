import * as React from "react";
import { DefaultNavBarItems } from "./Navbar.Constants";
import {
  Navbar as BootstrapNavbar,
  Nav,
} from "../../../node_modules/react-bootstrap/esm/index";

const DownloadResume = React.lazy(
  () =>
    import(
      /* webpackChunkName: "DownloadResume" */ "../DownloadResume/DownloadResume"
    )
);

const Navbar: React.FC<any> = (_) => {
  const [currentActiveIndex, updateActiveIndex] = React.useState(0);

  return (
    <>
      <BootstrapNavbar.Toggle aria-controls="collapse" />
      <BootstrapNavbar.Collapse id="collapse" role={""}>
        <Nav className="me-auto mb-2 mb-lg-0" navbarScroll>
          {DefaultNavBarItems.map((navbarItem, currentIndex) => {
            return (
              <Nav.Item
                key={navbarItem.name}
                style={{ cursor: "pointer" }}
                onClick={() => updateActiveIndex(currentIndex)}
              >
                <Nav.Link
                  as="span"
                  active={currentActiveIndex === currentIndex}
                  aria-current="page"
                >
                  {navbarItem.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <React.Suspense>
          <DownloadResume />
        </React.Suspense>
      </BootstrapNavbar.Collapse>
    </>
  );
};

export default Navbar;
