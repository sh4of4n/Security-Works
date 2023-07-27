import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const TableSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.table-container{
        max-height: 270px;
        overflow-y: auto;
        overflow-x: auto;
        padding: 0;
    }

    &.table-container table {
        border-right: 0 solid black;
        
    }

    &. table-bg {
        background-color: #f2f2f2; 
      }

    &.mb-0{
        table-layout: auto;
        width: 100%;
        border-collapse: collapse;
        box-shadow: rgba(0, 0, 0, 0.05) 0rem 0rem 0.825rem;
        white-space: nowrap;
    }

    &.container-margin{
        margin-top: 100px;
    }

    &.mb-0 thead th{
        background-color: #f2f2f2; 
        position: sticky;
        top: 0;
        padding: 8px;
        border: 1px solid transparent; 
        font-size: 1rem;
    }

    & .mb-0 tbody tr:nth-of-type(odd) td {
        background-color: #e6ffff;
        font-size: 0.85rem;
    }

    & .mb-0 tbody tr:nth-of-type(even) td {
        background-color: #ffffff;
        font-size: 0.85rem;
    }
      
    &.mb-0 th,
    &.mb-0 td {
      padding: 8px;
      border: 1px solid transparent; 
      font-size: 0.85rem;
    }

    &.table-container .mb-0 th:first-child,
    &.table-container .mb-0 th:last-child {
        z-index: 1;
    }

    &.table-container .mb-0 th:first-child,
    &.table-container .mb-0 td:first-child {
    position: sticky;
    left: 0; 
    }
    
    &.table-container .mb-0 th:last-child,
    &.table-container .mb-0 td:last-child {
    position: sticky;
    right: 0; 
    border: 0 solid black;
    border-right: 0 solid black;

    }


    &.icon{
        margin: 5px;
    }
      
`;

export default TableSFCss;