export type Skill = {
  skillDescription: string;
  skillProficiency: number;
  categories: string[];
};
export type Skills = ReadonlyArray<Skill>;

export type SkillsContainerProps = {
  category?: string;
};

export type SkillsContainerComponent = React.FC<SkillsContainerProps>;

export type SkillsNavProps = {
  onSkillCategoryChange?: (category: string) => void;
};

export type SkillNavComponent = React.FC<SkillsNavProps>;
