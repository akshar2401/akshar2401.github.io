import * as React from "react";
import Resume from "../../../Resume.pdf";
import Utilities from "../../Utilities";

const DownloadResume: React.FC<any> = (props) => {
  const downloadResume = async () => {
    await Utilities.downloadFile(Resume);
  };

  return (
    <button className="d-flex btn btn-outline-light" onClick={downloadResume}>
      Download Resume
    </button>
  );
};

export default DownloadResume;
