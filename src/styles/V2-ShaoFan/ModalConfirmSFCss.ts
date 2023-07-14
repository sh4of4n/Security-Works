import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ModalEditSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.modal-confirm form{
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-gap: 30px; 
    }

    &.confirm-button{
        background-color: #1aff1a;
        color: white;
        border-color: white;
    }

    &.confirm-button:hover{
        background-color: #00e600;
    }

    &.modal-header{
        font-weight: bold;
        font-size: 20px;
    }

`;

export default ModalEditSFCss;