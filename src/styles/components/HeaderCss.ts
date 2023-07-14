/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
21/06/2023            SawYN     1.0.0           - Create SideMenu css 

*/

import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const HeaderCss = (theme: Theme) => css`
  background: white;
  height: 7vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0rem 0.375rem 0.375rem 0rem;
  z-index: 20;
  align-items: center;
  display: flex;
  padding: 0 2rem;

  & img{
    width: auto;
    height: 1.5rem;
  }

  & .dropdown-menu{
    transform: translate(0px, 45px) !important;
  }

  & .dropdown-item{
    font-size: 0.9rem;
  }

  & .dropdown-item:hover{
    background: #EBF3FF;
    color: #134DA3;
  }

  & .name{
    font-size: 1rem;
    align-items: center;
    display: flex;
  }

  & .description{
    color: #929292;
    font-size: 0.8rem;
  }
`

export default HeaderCss;