/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            SawYN     1.0.0           - Create Leasy theme 

*/

import { Theme } from "./DefaultTheme";

const LeasyTheme = {
  fontFamily: "Lato-Regular",
  primary: "#00b4aa",
  secondary: "#7a7a7a",
  black: "#1a1a1a",
  white: "#ffffff"
};

const LeasyTextTheme = {
  txt: LeasyTheme.black,
  txtHvr: LeasyTheme.primary,
};

const AllLeasyTheme: Theme = {
  ...LeasyTheme,
  ...LeasyTextTheme,
};

export default AllLeasyTheme;
