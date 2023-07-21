import * as React from "react";
import Card from "react-bootstrap/esm/Card";
import { ListGroup } from "react-bootstrap";
import { InPageNavigationInternalComponent } from "./InPageNavigation.types";

const InPageNavigationInternal: InPageNavigationInternalComponent = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const header = props.header;
  const items = props.items;

  return (
    <>
      <Card bg="dark" text="light" style={{ width: "100%" }}>
        <Card.Header>{header}</Card.Header>
        <ListGroup variant="flush">
          {items.map((category, index) => (
            <ListGroup.Item
              variant="secondary"
              onClick={() => {
                setActiveIndex(index);
                props.onItemClick?.(index, items);
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

export default InPageNavigationInternal;
