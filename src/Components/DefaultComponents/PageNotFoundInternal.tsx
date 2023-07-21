import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router/dist/index";
import DefaultPageContent from "./DefaultPageContent";

const waitTimeInSeconds = 5;

export default function PageNotFoundInternal() {
  const [seconds, updateSeconds] = React.useState(waitTimeInSeconds);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    updateSeconds(waitTimeInSeconds);
  }, [location]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        updateSeconds((prev) => prev - 1);
      } else {
        navigate("/");
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  return (
    <DefaultPageContent>
      <p className="text-center">
        Oops you are on a wrong page. You will be navigated to home page in{" "}
        {seconds} seconds. If you don't like waiting,{" "}
        <Link to="/" className="text-light">
          click here
        </Link>
      </p>
    </DefaultPageContent>
  );
}
