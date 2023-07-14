/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
21/06/2023            SawYN     1.0.0           - Create SideMenu css 

*/

import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const SideMenuCss = (theme: Theme) => css`
  transition: all 1s ease;
  color: ${theme.txt};
  background: ${theme.white};
  height:93vh;
  padding-top: 1rem !important;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0rem 0.375rem 0.375rem 0rem;
  overflow: auto;

  & .pin{
    color: #929292;
    font-size: 1.1rem;
  }

  &::-webkit-scrollbar {
    width: 0;
    appearance: none;
  }

  & .profile-pic{
    height: 5rem;
    border-radius: 3rem;
  }

  &.sidemenu-transition{
    left: 0;
    z-index: 10;
    width: 18rem;
  }
  
  & *:focus{
    box-shadow: none;
  }

  & .accordion-button:hover {
    color: blue;
  }

  & .accordion-button-no-expand::after{
    display: none;
  }

  & .accordion-item{
    border:none;
  }

  & .sub-active, .sub-active button{
    color: blue;
    background-color: white;
  }

  & .active, .active button{
    background: #EBF3FF;
  }

  & .accordion-header button{
    background-color: white;
    box-shadow: none;
    border: none;
  }

  & .accordion-body .dropdown{
    font-size: 0.865rem;
    height: 2.5rem;
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.black};
    border-left: 0.125rem solid rgb(222, 226, 230);
  }

  & .app-nav-footer{
    text-align: center;
    font-size: 0.85rem;
    border-top: 0.125rem rgb(222, 226, 230) solid;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
  }

  & img{
    height: 1rem;
    width: auto;
  }

  &.chevron{
    all: unset;
    margin-top: 2rem;
    background: rgba(0,0,0,0.1);
    padding: 1rem 0.3rem 1rem 0.2rem!important;
    border-radius: 0 0.5rem 0.5rem 0;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.03) 0rem 0.375rem 0.375rem 0rem;
  }

  &.chevron:active{
    box-shadow: none;
  }
`;

export default SideMenuCss;
