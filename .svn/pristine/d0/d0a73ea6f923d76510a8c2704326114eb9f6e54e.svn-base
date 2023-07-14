/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            SawYN     1.0.0           - Create PartnerContext and PartnerContextProvider 

*/
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { Theme } from "styles/theme/DefaultTheme";
import AllLeasyTheme from "styles/theme/LeasyTheme";

interface PartnerContextProps {
  theme: Theme
}

const PartnerContext = createContext<PartnerContextProps>(null);

const PartnerContextProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(AllLeasyTheme);

  useEffect(() => {
    const partnerTheme = selectTheme();
    partnerTheme && setTheme(partnerTheme);
  }, [])

  /** select theme based on partner */
  const selectTheme = () => { // todo - to set default FNX theme
    return AllLeasyTheme;
  }

  return (
    <PartnerContext.Provider value={{
      theme
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </PartnerContext.Provider>
  )
}

export { PartnerContext, PartnerContextProvider}