import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ButtonSFCss = (theme: Theme) => css`

    color:${theme.txt};

    & .select-all-button{
        margin: 7px;
    }

`;

export default ButtonSFCss;