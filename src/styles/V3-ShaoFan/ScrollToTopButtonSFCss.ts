import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ScrollToTopButtonSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.scroll-to-top-button {
        position: fixed;
        bottom: 100px;
        right: 100px;
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