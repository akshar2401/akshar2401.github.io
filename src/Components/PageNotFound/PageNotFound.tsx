import * as React from "react";
import { useParams } from "react-router";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
export default function PageNotFound() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>404: Not found</Col>
      </Row>
    </Container>
  );
}
