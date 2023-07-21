import * as React from "react";
import { DefaultNavBarItems } from "./Navbar.Constants";
import {
  Navbar as BootstrapNavbar,
  Nav,
} from "../../../node_modules/react-bootstrap/esm/index";
import { Link, useLocation } from "react-router-dom";
import { DownloadResume } from "../DownloadResume";

const NavbarInternal: React.FC<any> = (_) => {
  const location = useLocation();
  return (
    <>
      <BootstrapNavbar.Toggle aria-controls="collapse" />
      <BootstrapNavbar.Collapse id="collapse" role={""}>
        <Nav className="me-auto mb-2 mb-lg-0" navbarScroll>
          {DefaultNavBarItems.map((navbarItem) => {
            return (
              <Link
                to={navbarItem.route}
                style={{ textDecoration: "none" }}
                key={navbarItem.name}
              >
                <Nav.Item style={{ cursor: "pointer" }}>
                  <Nav.Link
                    as="span"
                    active={location.pathname === navbarItem.route}
                    aria-current="page"
                  >
                    {navbarItem.name}
                  </Nav.Link>
                </Nav.Item>
              </Link>
            );
          })}
        </Nav>
        <DownloadResume />
      </BootstrapNavbar.Collapse>
    </>
  );
};

export default NavbarInternal;
