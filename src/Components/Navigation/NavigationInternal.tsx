import * as React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
} from "../../../node_modules/react-bootstrap/esm/index";
import { Navbar } from "./Navbar";

const NavigationInternal: React.FC<any> = (_) => {
  return (
    <>
      <BootstrapNavbar
        expand="lg"
        className="border-bottom border-light"
        variant="dark"
        style={{
          fontSize: "1rem",
          // @ts-ignore
          "--bs-border-opacity": ".15",
          fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        }}
      >
        <Container fluid={true}>
          <BootstrapNavbar.Brand>Portfolio</BootstrapNavbar.Brand>
          <Navbar />
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default NavigationInternal;
