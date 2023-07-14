/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
13/12/2022            LeeSW     1.0.0           - Base version

*/

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";
import en from "./locales/en.json";
import ms from "./locales/ms.json";
import zh from "./locales/zh.json";
import ta from "./locales/ta.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("lang") || "en",
    debug: false,
    // ns: ["replacements", "translations"],
    // defaultNS: "translations",
    resources: {
      "en": { translation: en },
      'ms': { translation: ms },
      'zh': { translation: zh },
      'ta': { translation: ta },
    },
    keySeparator: '|',
    interpolation: {
      format: function (value, format, lng) {
        if (value instanceof Date) return moment(value).format(format);
        return value;
      },
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });


export default i18n;