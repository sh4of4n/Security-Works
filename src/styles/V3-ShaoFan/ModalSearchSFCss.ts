import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ModalSearchSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.modal-selected form{
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-gap: 30px; 
    }

    &.modal-header{
        font-weight: bold;
        font-size: 20px;
    }

`;

export default ModalSearchSFCss;