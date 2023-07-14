/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
02/12/2022            GohWZ     1.0.0           - YP Version 
27/04/2022            LeeSW     1.0.1           - Cleanup crypto functions

*/

import CryptoJS from "crypto-js";

export const encrypt = (value: string) => {
  const secretKey = sessionStorage.getItem("secretKey");
  return CryptoJS.AES.encrypt(value, secretKey).toString();
};

export const decrypt = (value: string) => {
  const secretKey = sessionStorage.getItem("secretKey");
  return CryptoJS.AES.decrypt(value, secretKey).toString(CryptoJS.enc.Utf8);
};
