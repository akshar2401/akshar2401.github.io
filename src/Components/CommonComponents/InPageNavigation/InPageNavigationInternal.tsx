import * as React from "react";
import Card from "react-bootstrap/esm/Card";
import { ListGroup } from "react-bootstrap";
import {
  InPageNavigationInternalComponent,
  InPageNavigationItem,
  InPageNavigationProps,
} from "./InPageNavigation.types";
import { BreakpointsEventManager } from "../../../Misc";

const InPageNavigationInternal: InPageNavigationInternalComponent = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = React.useCallback(() => {
    if (!props.useExpandCollapse) {
      return;
    }
    setIsExpanded((isExpanded) => !isExpanded);
  }, []);

  const collapse = React.useCallback(() => {
    if (!props?.useExpandCollapse) {
      return;
    }
    if (
      !BreakpointsEventManager.matchesSmall() &&
      !BreakpointsEventManager.matchesExtraSmall()
    ) {
      return;
    }
    setIsExpanded(false);
  }, []);

  const expand = React.useCallback(() => {
    if (!props?.useExpandCollapse) {
      return;
    }
    if (
      BreakpointsEventManager.matchesSmall() ||
      BreakpointsEventManager.matchesExtraSmall()
    ) {
      return;
    }

    setIsExpanded(true);
  }, []);

  React.useEffect(() => {
    if (
      BreakpointsEventManager.matchesExtraSmall() ||
      BreakpointsEventManager.matchesSmall()
    ) {
      collapse();
    } else {
      expand();
    }
    const subs = [
      BreakpointsEventManager.addListenerForExtraSmall(collapse),
      BreakpointsEventManager.addListenerForSmall(collapse),
      BreakpointsEventManager.addListenerForMedium(expand),
      BreakpointsEventManager.addListenerForLarge(expand),
      BreakpointsEventManager.addListenerForExtraLarge(expand),
      BreakpointsEventManager.addListenerFor2ExtraLarge(expand),
    ];
    return () => {
      subs.forEach((sub) => sub.dispose());
    };
  }, []);

  return (
    <>
      <Card bg="dark" text="light" style={{ width: "100%" }}>
        <Card.Header
          className="d-flex align-items-center justify-content-between"
          onClick={toggleExpanded}
          style={{ cursor: "pointer" }}
        >
          {props.header}
          {getExpandCollapseIcon(props, isExpanded, toggleExpanded)}
        </Card.Header>
        {getNavItems(props, isExpanded, activeIndex, setActiveIndex)}
      </Card>
    </>
  );
};

function getExpandCollapseIcon(
  props: InPageNavigationProps,
  isExpanded: boolean,
  toggleExpanded: () => void
) {
  if (!props?.useExpandCollapse) {
    return null;
  }

  return (
    <>
      {isExpanded ? (
        <i
          className="fa fa-solid fa-chevron-up"
          style={{ cursor: "pointer" }}
        />
      ) : (
        <i
          className="fa fa-solid fa-chevron-down"
          style={{ cursor: "pointer" }}
        />
      )}
    </>
  );
}

function getNavItems(
  props: InPageNavigationProps,
  isExpanded: boolean,
  activeNavItemIndex: number,
  setActiveIndex: (index: number) => void
) {
  let items: [InPageNavigationItem, number][] = props.items.map(
    (item, index) => [item, index]
  );

  if (props?.useExpandCollapse && !isExpanded) {
    items = items.filter((item) => item[1] === activeNavItemIndex);
  }
  return (
    <>
      <ListGroup variant="flush">
        {items.map((item) => (
          <ListGroup.Item
            variant="secondary"
            onClick={() => {
              props.onItemClick?.(item[1], props.items);
              setActiveIndex(item[1]);
            }}
            active={item[1] === activeNavItemIndex}
            action
            key={item[0]}
          >
            {item[0]}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default InPageNavigationInternal;
