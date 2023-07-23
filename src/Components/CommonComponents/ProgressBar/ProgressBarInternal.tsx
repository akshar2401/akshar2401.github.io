import * as React from "react";
import { ProgressBarInternalComponent } from "./ProgressBar.types";
import { ProgressBar } from "react-bootstrap";

const ProgressBarInternal: ProgressBarInternalComponent = (props) => {
  return (
    <>
      <div className="d-flex text-light align-items-center">
        <span style={{ fontSize: "15px", paddingRight: "10px" }}>
          Low ({props.min || 0}%)
        </span>
        <ProgressBar
          className="flex-grow-1"
          min={props.min || 0}
          max={props.max || 100}
          variant="success"
          striped
          style={{ height: "1.5rem", fontSize: "15px" }}
          label={`${props.current}% Proficiency`}
          now={props.current}
        />
        <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
          High ({props.max || 100}%)
        </span>
      </div>
    </>
  );
};

export default ProgressBarInternal;
