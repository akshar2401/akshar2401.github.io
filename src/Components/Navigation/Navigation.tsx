import * as React from "react";
const Navbar = React.lazy(
  () => import(/* webpackChunkName: "Navbar" */ "./Navbar")
);

const Navigation: React.FC<any> = (_) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Portfolio
        </a>
        <React.Suspense>
          <Navbar />
        </React.Suspense>
      </div>
    </nav>
  );
};

export default Navigation;
