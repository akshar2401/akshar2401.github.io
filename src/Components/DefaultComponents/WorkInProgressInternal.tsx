import * as React from "react";
import DefaultPageContent from "./DefaultPageContent";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { DefaultNavBarItems } from "../Navigation";

const WorkInProgressComponentInternal: React.FC<any> = () => {
  const location = useLocation();
  const pathName = DefaultNavBarItems.find(
    (navItem) => navItem.route === location.pathname
  );
  return (
    <DefaultPageContent>
      <p className="text-center">
        {pathName?.name ?? "This"} page is currently work in progress. Please
        come back later. Until then, explore my home page{" "}
        <Link to="/" className="text-light">
          here
        </Link>
      </p>
    </DefaultPageContent>
  );
};

export default WorkInProgressComponentInternal;
