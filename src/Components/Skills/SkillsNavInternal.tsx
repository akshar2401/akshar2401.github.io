import * as React from "react";
import { SkillCategories, SkillsNavHeader } from "./Skills.Constants";
import { InPageNavigation, OnItemClickHandler } from "../CommonComponents";

// not implemented yet, but would be shortly
// for now a dummy function
const OnItemClickHandlerImpl: OnItemClickHandler = (index, items) => {
  console.log(items[index]);
};

const SkillsNavInternal: React.FC<any> = () => {
  return (
    <InPageNavigation
      header={SkillsNavHeader}
      items={SkillCategories}
      onItemClick={OnItemClickHandlerImpl}
    />
  );
};

export default SkillsNavInternal;
