import * as React from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import { Skills } from "../Skills";
import { About } from "../About";
import { DefaultPage } from "../DefaultComponents";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { LazyLoad } from "../CommonComponents";
import { AutoDownloadResume } from "../DownloadResume";

const PortfolioRootInternal: React.FC<any> = () => {
  return (
    <LazyLoad>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/resume" element={<AutoDownloadResume />} />

          <Route path="*" element={<DefaultPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LazyLoad>
  );
};

export default PortfolioRootInternal;
