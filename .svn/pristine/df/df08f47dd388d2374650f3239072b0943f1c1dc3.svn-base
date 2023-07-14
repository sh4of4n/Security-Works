/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
26/06/2023            SawYN     1.0.0           - Create Login css 

*/

import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const LoginCss = (theme: Theme) => css`
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;

  & .login-bg{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  & .logo{
    position:absolute;
    z-index:10;
    left: 11rem;
    top: 4.5rem;
    height: 2rem;
  }

  & .login-panel{
    position:absolute;
    z-index:10;
    background: ${theme.white};
    height: auto;
    width: 450px;
    border-radius: 8px;
  }

  & .profile-pic{
    width: 3rem;
  }

  & .title{
    font-size: 1.5rem;
    font-weight: 400;
    display: block;
    color: #134DA3;
  }

  & .description, .checkbox label{
    color: #929292;
    font-size: 0.8rem;
    display: block;
  }

  & .description-clickable{
    color: #134DA3 !important;
    cursor: pointer;
  }

  & .description-clickable:hover{
    color: #2d76f8 !important;
  }

  & .button{
    font-size: 1rem;
    height:2.7rem;
    background: #134DA3;
    border: #134DA3;
  }

  & .button:hover{
    background: #2d76f8;
    border: #2d76f8;
  }

  & .input span{
    color: #929292;
    font-size: 0.8rem;
  }

  & .input svg{
    color: black;
    font-size: 1rem;
  }

  & .input input{
    font-size: 0.8rem;
    height: 3rem;
  }

  & *:focus{
    box-shadow: none;
  }

  & .dropdown-toggle{
    background: transparent;
    border: transparent;
    padding: 0;
  }

  & .dropdown-toggle::after{
    display: none;
  }

  & .dropdown-toggle:focus{
    background: transparent;
    border: transparent;
  }

  & .dropdown-menu{
    transform: translate(-100px, 38px)!important;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0rem 0rem 0.625rem;
  }

  & .dropdown-menu a{
    font-size: 0.8rem;
    padding: 0.5rem 1.5rem;
  }

  & .icon{
    color: #929292;
  }

  & .bottom-text-container{
    text-align: end;
    position: absolute;
    bottom: 0;
    padding: 2rem;
  }

  & .bottom-text{
    font-size: 0.8rem;
    display: block;
    color: white;
  }
`;

export default LoginCss;
