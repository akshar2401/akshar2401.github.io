import * as React from "react";
import Card from "../../../node_modules/react-bootstrap/esm/Card";
import { ListGroup } from "../../../node_modules/react-bootstrap/esm/index";
import { SkillCategories } from "./Skills.Constants";

const SkillsNavInternal: React.FC<any> = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <Card bg="secondary" text="light" style={{ width: "100%" }}>
        <Card.Header>Skills</Card.Header>
        <ListGroup variant="flush">
          {SkillCategories.map((category, index) => (
            <ListGroup.Item
              variant="secondary"
              className="bg-secondary text-light"
              onClick={() => {
                setActiveIndex(index);
              }}
              active={index === activeIndex}
              action
              key={category}
            >
              {category}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </>
  );
};

export default SkillsNavInternal;
