/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
23/06/2023            SawYN     1.0.0           - Create PageTemplate css 

*/

import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const PageTemplateCss = (theme: Theme) => css`
  

  & .page-body{
    overflow: scroll;
    height: 93vh;
    width: 98.3%;
    padding: 3rem 4% 1rem 4% !important;
    &::-webkit-scrollbar {
      width: 0;
      appearance: none;
    }
  }

  & .sidemenu-drop{
    padding: 0;
    position: fixed;
    display: block;
    min-height: 100%;
    width: 100%;
    min-width: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.85);
    z-index: 4;
  }

  & .sidemenu-open{
    left: 0;
    z-index: 10;
    position: fixed;
  }

  & .sidemenu-hide{
    left: -100%;
    position: fixed;
    z-index:1;
  }
`

export default PageTemplateCss;