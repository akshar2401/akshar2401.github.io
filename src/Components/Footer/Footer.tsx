import * as React from "react";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import { IConLink } from "./Footer.types";
import Constants from "../../Constants";

const styles = {
  paddingTop: "10px",
  paddingBottom: "10px",
};

const paddingIconColStyles = {
  padding: "0px 3px",
};

const icons: IConLink[] = [
  {
    icon: "fa fa-envelope",
    link: `mailto:${Constants.Email}`,
  },
  {
    icon: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/akshar-patel-378071122/",
  },
  { icon: "fa fa-github", link: "https://github.com/akshar2401" },
];

const Footer: React.FC<any> = () => {
  return (
    <footer className="fixed-bottom bg-dark text-light" style={styles}>
      <Container fluid>
        <Row className="justify-content-center">
          {icons.map((icon) => (
            <Col xs="auto" style={paddingIconColStyles} key={icon.icon}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg" style={{ cursor: "pointer" }}>
                  <i className="fa fa-circle fa-stack-2x text-light" />
                  <i className={icon.icon + " fa-stack-1x text-dark"} />
                </span>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
