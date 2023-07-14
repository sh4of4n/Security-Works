import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ScrollToTopButtonSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.button-scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
      }
      
    &.button-scroll-to-top button {
    border: none;
    outline: none;
    background-color: #ccc;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    }
      
    
`;

export default ScrollToTopButtonSFCss;