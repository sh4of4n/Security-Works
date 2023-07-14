import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const DropdownSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.filterdropdown{
        color: white;
    }
    
`;

export default DropdownSFCss;