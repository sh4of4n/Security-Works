/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
21/06/2023            SawYN     1.0.0           - Create Images component

*/
import React from "react";
import finexusLogo from "../assets/images/finexus-logo.svg";
import profilePic from "../assets/images/profile-pic.jpg";
import loginBG from "../assets/images/loginBG.svg";
import viewTransaction from "../assets/images/viewTransaction.svg";
import pdf from "../assets/images/file.png"
import csv from "../assets/images/csv-file.png";
import save from "../assets/images/floppy-disk.png";
import saved from "../assets/images/disk.png";

const createElement =
  (imgSrc: string) =>
    (
      props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >
    ) =>
      <img alt="" {...props} src={imgSrc} />;

  export const FinexusLogo = createElement(finexusLogo);
  export const ProfilePic = createElement(profilePic);
  export const LoginBG = createElement(loginBG);
  export const ViewTransaction = createElement(viewTransaction);
  export const Pdf = createElement(pdf);
  export const Csv = createElement(csv);
  export const Save = createElement(save);
  export const Saved = createElement(saved);
