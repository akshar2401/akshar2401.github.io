import * as React from "react";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import Col from "../../../node_modules/react-bootstrap/esm/Col";

const DefaultPageContent: React.FC<{ children: any[] | any }> = (props) => {
  return (
    <Container className="d-flex align-items-center flex-grow-1" fluid>
      <Row className="justify-content-center w-100">
        <Col className="text-light" xs={12} style={{ fontSize: "25px" }}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultPageContent;
