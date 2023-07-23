import { SkillCategory } from "./Skills.Constants";

export type Skill = {
  skillDescription: string;
  skillProficiency: number;
  categories: SkillCategory[];
};
export type Skills = ReadonlyArray<Skill>;

export type SkillsContainerProps = {
  category?: string;
};

export type SkillsContainerComponent = React.FC<SkillsContainerProps>;

export type SkillsNavProps = {
  onSkillCategoryChange?: (category: SkillCategory) => void;
};

export type SkillNavComponent = React.FC<SkillsNavProps>;
