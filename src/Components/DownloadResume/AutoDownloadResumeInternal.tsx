import * as React from "react";
import Resume from "../../../Resume.pdf";
import { DefaultPageContent } from "../DefaultComponents";

const AutoDownloadResumeInternal: React.FC<any> = () => {
  React.useEffect(() => {
    window.location.replace(Resume);
  }, []);
  return <DefaultPageContent>Opening Resume...</DefaultPageContent>;
};

export default AutoDownloadResumeInternal;
