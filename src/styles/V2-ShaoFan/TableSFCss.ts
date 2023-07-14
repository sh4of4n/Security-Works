import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const TableSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.table-container{
        max-height: 310px;
        overflow-y: auto;
    }

    &. table-bg {
        background-color: #f2f2f2; 
      }

    &.mb-0{
        table-layout: auto;
        width: 100%;
        border-collapse: collapse;
        box-shadow: rgba(0, 0, 0, 0.05) 0rem 0rem 0.825rem;
    }

    &.mb-0 thead th{
        background-color: #f2f2f2; 
        position: sticky;
        top: 0;
        z-index: 1;
        padding: 8px;
        border: 1px solid transparent; 
        font-size: 1rem;
    }

    & .mb-0 tbody tr:nth-of-type(odd) td {
        background-color: #f0ffff;
        font-size: 0.85rem;
    }

    & .mb-0 tbody tr:nth-of-type(even) td {
        background-color: #ffffff;
        font-size: 0.85rem;
    }
      
    & .mb-0 th,
    & .mb-0 td {
      padding: 8px;
      border: 1px solid transparent; /* Set the border color to transparent */
      font-size: 0.85rem;
    }
      
`;

export default TableSFCss;