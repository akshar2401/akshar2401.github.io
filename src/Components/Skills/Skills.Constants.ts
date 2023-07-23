import { InPageNavigationItems } from "../CommonComponents";
import { Skills } from "./Skills.types";

export enum SkillCategory {
  ProgrammingLanguages = "Programming Languages",
  WebDevelopment = "Web Development",
  DataScience = "Data Science",
  Databases = "Databases",
  CompilerConstruction = "Compiler Construction",
  Tools = "Tools",
  TestAutomation = "Test Automation",
}

export const SkillCategories: InPageNavigationItems = Object.keys(SkillCategory)
  .filter((key) => typeof key == "string")
  .map((key) => SkillCategory[key]);

export const SkillsNavHeader = "Skills";

export const SkillsCollection: Skills = [
  {
    skillDescription: "Java",
    skillProficiency: 95,
    categories: [SkillCategory.ProgrammingLanguages],
  },
  {
    skillDescription: "Python",
    skillProficiency: 100,
    categories: [SkillCategory.ProgrammingLanguages],
  },
  {
    skillDescription: "HTML",
    skillProficiency: 100,
    categories: [SkillCategory.WebDevelopment],
  },
].sort((s1, s2) => -(s1.skillProficiency - s2.skillProficiency));
