import * as React from "react";
import { Utilities, Constants } from "../../Misc";
import { Button } from "../../../node_modules/react-bootstrap/esm/index";

const downloadResume = async () => {
  await Utilities.downloadFile(Constants.ResumeUrl, Constants.ResumeFileName);
};

const DownloadResumeInternal: React.FC<any> = (_) => {
  return (
    <Button onClick={downloadResume} variant="outline-light">
      Download Resume
    </Button>
  );
};

export default DownloadResumeInternal;
