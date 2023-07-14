/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
09/12/2022            GohWZ     1.0.0           - Base Version 
13/12/2022            LeeSW     1.0.1           - Import i18n
09/02/2023            LeeSW     1.0.2           - Import ApolloClient
27/03/2023            LeeSW     1.0.3           - Import I18nextProvider

*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
// import ApolloClient from "ApolloClient";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

if (window.location.href === "http://localhost:3000/") {
  window.location.href = `${window.location.origin}${process.env.PUBLIC_URL}`;
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <I18nextProvider i18n={i18n}>
    {/* <ApolloClient> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    {/* </ApolloClient> */}
  </I18nextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();