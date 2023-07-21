import * as React from "react";
import Resume from "../../../Resume.pdf";
import Utilities from "../../Utilities";
import { Button } from "../../../node_modules/react-bootstrap/esm/index";
import Constants from "../../Constants";

const downloadResume = async () => {
  await Utilities.downloadFile(Resume, Constants.ResumeFileName);
};

const DownloadResumeInternal: React.FC<any> = (_) => {
  return (
    <Button onClick={downloadResume} variant="outline-light">
      Download Resume
    </Button>
  );
};

export default DownloadResumeInternal;
