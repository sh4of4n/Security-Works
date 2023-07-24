import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const ModalAddSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.modal-add form{
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-gap: 30px; 
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }

    &.modal-header{
        font-weight: bold;
        font-size: 20px;
    }

    &.add-button{
        background-color: #1aff1a;
        color: white;
        border-color: white;
    }

    &.add-button:hover{
        background-color: #00e600;
    }

`;

export default ModalAddSFCss;