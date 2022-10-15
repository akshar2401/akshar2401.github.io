import * as React from "react";

const Navigation = React.lazy(
  () => import(/* webpackChunkName: "Navigation" */ "../Navigation/Navigation")
);

const Footer = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ "../Footer/Footer")
);

function gen(number) {
  const nums = [];
  for (let i = 0; i <= number; i++) {
    nums.push(i);
  }
  return nums;
}
const PortfolioRoot: React.FC<any> = (props) => {
  return (
    <React.Suspense>
      <Navigation />
      <Footer />
    </React.Suspense>
  );
};

export default PortfolioRoot;
