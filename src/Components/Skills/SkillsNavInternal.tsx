import * as React from "react";
import {
  SkillCategories,
  SkillCategory,
  SkillsNavHeader,
} from "./Skills.Constants";
import { InPageNavigation, OnItemClickHandler } from "../CommonComponents";
import { SkillNavComponent } from "./Skills.types";

const SkillsNavInternal: SkillNavComponent = (props) => {
  const onItemClickHandler: OnItemClickHandler = React.useCallback(
    (index, items) => {
      const skillCategory = items[index];
      props?.onSkillCategoryChange?.(skillCategory as SkillCategory);
    },
    []
  );
  return (
    <InPageNavigation
      header={SkillsNavHeader}
      items={SkillCategories}
      useExpandCollapse={true}
      onItemClick={onItemClickHandler}
    />
  );
};

export default SkillsNavInternal;
