import React, { lazy, Suspense } from "react";
import HeaderSC from "./sc/Header";
import MainSC from "./sc/Main";
import FooterSC from "./sc/Footer";

import HeaderSX from "./sx/Header";
import MainSX from "./sx/Main";
import FooterSX from "./sx/Footer";

const Layout = ({ override }): JSX.Element => {
  const render = (or: string) => {
    return or === "sc" ? (
      <>
        <HeaderSC />
        <MainSC />
        <FooterSC />
      </>
    ) : or === "sx" ? (
      <>
        <HeaderSX />
        <MainSX />
        <FooterSX />
      </>
    ) : null;
  };

  return render(override);
};

export default Layout;
