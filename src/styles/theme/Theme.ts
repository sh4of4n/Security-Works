/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            SawYN     1.0.0           - Create Leasy theme 

*/

import { Theme } from "./DefaultTheme";

const SWTheme = {
  fontFamily: "Lato-Regular",
  primary: "#134DA3",
  secondary: "#7a7a7a",
  black: "#1a1a1a",
  white: "#ffffff"
};

const SWTextTheme = {
  txt: SWTheme.black,
  txtHvr: SWTheme.primary,
};

const AllSWTheme: Theme = {
  ...SWTheme,
  ...SWTextTheme,
};

export default AllSWTheme;
