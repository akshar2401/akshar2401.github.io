import Resume from "../../Resume.pdf";

export default class Constants {
  static readonly PortfolioRootDivID = "portfolioRoot";
  static readonly ResumeFileName = "AksharResume.pdf";
  static readonly ResumeUrl: string = Resume;
  static readonly AboutContainerId = "aboutContainer";
  static readonly SkillsContainerColumnId = "skillsContainerColumn";
  static readonly LinkedinURL =
    "https://www.linkedin.com/in/akshar-patel-378071122/";
  static readonly GithubURL = "https://github.com/akshar2401";
  static readonly SourceCodeURL =
    "https://github.com/akshar2401/akshar2401.github.io";
  private static readonly Email = "aksharpatel144@gmail.com";
  static readonly EmailURL = `mailto:${this.Email}`;
  static readonly EmailMeAction = "Email me";
  static readonly VisitLinkedinAction = "Visit my Linkedin Profile";
  static readonly VisitGithubAction = "Visit my Github Profile";
  static readonly ViewResumeAction = "View my Resume";
}
