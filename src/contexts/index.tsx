/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            SawYN     1.0.0           - Create Context

*/

import React from "react";
import { PartnerContextProvider } from "./PartnerContext";
import { RouteContextProvider } from "./RouteContext";

const Contexts = ({ children }) => {
  return (
    <RouteContextProvider>
      <PartnerContextProvider>
        {children}
      </PartnerContextProvider>
    </RouteContextProvider>
  );
};

export default Contexts;
