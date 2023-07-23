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
    skillDescription: "C",
    skillProficiency: 95,
    categories: [SkillCategory.ProgrammingLanguages],
  },
  {
    skillDescription: "C++",
    skillProficiency: 95,
    categories: [SkillCategory.ProgrammingLanguages],
  },
  {
    skillDescription: "C#",
    skillProficiency: 95,
    categories: [SkillCategory.ProgrammingLanguages],
  },
  {
    skillDescription: "Rust",
    skillProficiency: 80,
    categories: [SkillCategory.ProgrammingLanguages],
  },
  {
    skillDescription: "TypeScript",
    skillProficiency: 95,
    categories: [
      SkillCategory.ProgrammingLanguages,
      SkillCategory.WebDevelopment,
    ],
  },
  {
    skillDescription: "JavaScript",
    skillProficiency: 95,
    categories: [
      SkillCategory.ProgrammingLanguages,
      SkillCategory.WebDevelopment,
    ],
  },
  {
    skillDescription: "React",
    skillProficiency: 90,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "NodeJS",
    skillProficiency: 95,
    categories: [
      SkillCategory.ProgrammingLanguages,
      SkillCategory.WebDevelopment,
    ],
  },
  {
    skillDescription: "Angular",
    skillProficiency: 80,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "Redux",
    skillProficiency: 90,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "HTML",
    skillProficiency: 100,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "CSS",
    skillProficiency: 90,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "Bootstrap",
    skillProficiency: 75,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "Django",
    skillProficiency: 95,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "Flask",
    skillProficiency: 70,
    categories: [SkillCategory.WebDevelopment],
  },
  {
    skillDescription: "ASP.NET Core",
    skillProficiency: 80,
    categories: [SkillCategory.WebDevelopment],
  },
].sort((s1, s2) => -(s1.skillProficiency - s2.skillProficiency));
