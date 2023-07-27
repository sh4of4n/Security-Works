/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            SawYN     1.0.0           - Create Text css 

*/

import { css } from "@emotion/react";

const TableCss = () => css`

  & .checkbox{
    font-size: 0.85rem;
  }

  & .table-title{
    font-size: 0.85rem;
    color: rgb(19, 77, 163);
  }

  & td{
    font-size: 0.85rem;
    padding: 0.7rem 1rem;
  }

  & tr:nth-of-type(even) td{
    background: #E8F4FF;
  }

  & .dropdown-menu{
    transform: translate(-105px, 26px) !important;
  }

  & .icon{
    color: rgb(19, 77, 163);
  }

  & th{
    background: #ececec;
    font-weight: 600;
    padding: 0.8rem 1rem;
  }

  & .selected-row td {
    background-color: #46d5ff!important;
  }
`;

export default TableCss;
