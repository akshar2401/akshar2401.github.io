import * as React from "react";
import SkillsNav from "./SkillsNav";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
import SkillsContainer from "./SkillsContainer";
import { Constants } from "../../Misc";
import { SkillCategory } from "./Skills.Constants";

const SkillsInternal: React.FC<any> = () => {
  const [currentCategory, setCurrentCategory] = React.useState(
    SkillCategory.ProgrammingLanguages
  );

  return (
    <>
      <Container className="mt-3 flex-grow-1">
        <Row>
          <Col lg={{ span: 4 }} xs={{ span: 12, offset: 0 }}>
            <SkillsNav onSkillCategoryChange={setCurrentCategory} />
          </Col>
          <Col
            lg={{ span: 8 }}
            xs={{ span: 12, offset: 0 }}
            className="mt-3"
            id={Constants.SkillsContainerColumnId}
          >
            <SkillsContainer category={currentCategory} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SkillsInternal;
