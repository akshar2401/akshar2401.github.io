import * as React from "react";
import SkillsNav from "./SkillsNav";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import Col from "../../../node_modules/react-bootstrap/esm/Col";

const SkillsInternal: React.FC<any> = () => {
  return (
    <>
      <Container className="mt-3 flex-grow-1">
        <Row>
          <Col lg={{ span: 4 }} xs={{ span: 12, offset: 0 }}>
            <SkillsNav />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SkillsInternal;
