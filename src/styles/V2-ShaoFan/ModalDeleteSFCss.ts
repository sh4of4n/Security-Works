import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ModalDeleteSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.delete-button{
        background-color: #ff4d4d;
        color: white;
        border-color: white;
    }

    &.delete-button:hover{
        background-color: red;
    }

    &.modal-header{
        font-weight: bold;
        font-size: 20px;
    }

`;

export default ModalDeleteSFCss;