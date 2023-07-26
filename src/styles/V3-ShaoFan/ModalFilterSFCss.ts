import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ModalFilterSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.modal-search form{
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-gap: 30px; 
    }

    &.modal-header{
        font-weight: bold;
        font-size: 20px;
    }

    &.save-button{
        margin-right: 120px;
        color: white;
    }

    &.icon-save{
        color: white;
        margin-right: 5px;
    }

`;

export default ModalFilterSFCss;