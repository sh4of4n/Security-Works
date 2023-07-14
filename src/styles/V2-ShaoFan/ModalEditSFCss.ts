import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ModalEditSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.modal-edit form{
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-gap: 30px; 
    }

    &.modal-header{
        font-weight: bold;
        font-size: 20px;
    }

    &.save-button{
        background-color: #1aff1a;
        color: white;
        border-color: white;
    }

    &.save-button:hover{
        background-color: #00e600;
    }

`;

export default ModalEditSFCss;