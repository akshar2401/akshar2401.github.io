import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router/dist/index";
import DefaultPageContent from "./DefaultPageContent";

export default function PageNotFound() {
  const [seconds, updateSeconds] = React.useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    updateSeconds(5);
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
