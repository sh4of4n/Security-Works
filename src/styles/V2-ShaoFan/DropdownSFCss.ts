import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const DropdownSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.filterdropdown{
        color: white;
        float: right;
        font-weight: bold;
    }

    &.select-all-button{
        background-color: #1aff1a;
        color: white;
        border-color: white;
    }

    &.select-all-button:hover{
        background-color: #00e600;
    }

    &.clear-all-button{
        background-color: #ff4d4d;
        color: white;
        border-color: white;
    }

    &.clear-all-button:hover{
        background-color: red;
    }
    
`;

export default DropdownSFCss;