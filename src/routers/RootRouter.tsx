import { paths } from "routers/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Playground from "pages/Playground";

import BrowseScreenSF from "pages/BrowseScreenSF";
import BrowseScreenSFCss from "styles/V1-ShaoFan/BrowseScreenSFCss";
import V2BrowseScreenSF from "pages/V2BrowseScreenSF";
// import Login from "pages/Login";

// import Login from "pages/Login";

import Login from "pages/Login";
import Browse from "pages/Browse";
import V3BrowseScreenSF from "pages/V3BrowseScreenSF";


const RootRouter: React.FC<any> = () => {
  return (
    <Routes>
      {/** ==================== PLAYGROUND ==================== */}
      {<Route path={paths.Playground} element={<Playground />} />}
      {<Route path={paths.V2BrowseScreenSF} element={<V2BrowseScreenSF />} />}
      {<Route path={paths.BrowseScreenSF} element={<BrowseScreenSF />} />}
      {<Route path={paths.V3BrowseScreenSF} element={<V3BrowseScreenSF />} />}
      {/* <Route path={paths.Login} element={<Login/>}/> */}

    </Routes>
  );
};

export default RootRouter;
