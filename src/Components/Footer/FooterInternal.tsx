import * as React from "react";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import { IconLink } from "./Footer.types";
import Constants from "../../Constants";

const styles = {
  "--bs-border-opacity": ".15",
};

const paddingIconColStyles = {
  padding: "0px 3px",
};

const icons: IconLink[] = [
  {
    icon: "fa fa-envelope",
    link: `mailto:${Constants.Email}`,
  },
  {
    icon: "fa fa-linkedin",
    link: Constants.LinkedinURL,
  },
  { icon: "fa fa-github", link: Constants.GithubURL },
];

const FooterInternal: React.FC<any> = () => {
  return (
    <footer
      className="text-light border-top border-light d-flex align-items-center py-3 mt-3"
      // @ts-ignore
      style={styles}
    >
      <Container fluid>
        <Row className="justify-content-center my-auto">
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

export default FooterInternal;
