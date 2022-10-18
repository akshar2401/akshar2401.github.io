import * as React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
} from "../../../node_modules/react-bootstrap/esm/index";

const Navbar = React.lazy(
  () => import(/* webpackChunkName: "Navbar" */ "./Navbar")
);

const Navigation: React.FC<any> = (_) => {
  return (
    <>
      <BootstrapNavbar
        expand="lg"
        className="border-bottom border-light"
        variant="dark"
        style={{
          fontSize: "1rem",
          "--bs-border-opacity": ".15",
          fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        }}
      >
        <Container fluid={true}>
          <BootstrapNavbar.Brand>Portfolio</BootstrapNavbar.Brand>
          <React.Suspense>
            <Navbar />
          </React.Suspense>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navigation;
