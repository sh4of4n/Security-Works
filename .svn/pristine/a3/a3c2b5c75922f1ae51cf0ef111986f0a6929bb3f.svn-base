/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
10/02/2023            LeeSW     1.0.0           - Create ApolloClient by referring to previous version

*/

import {
  ApolloClient as Client,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import React, { createContext, useEffect, useState } from "react";
import { onError } from "@apollo/client/link/error";
import CryptoJS from "crypto-js";
import crypto from "crypto";
import { encrypt, decrypt } from "utilities/cryptoUtil";
import { publicIpv4 } from "public-ip";
import { trackPromise } from "react-promise-tracker";
import moment from "moment";
import { createUploadLink } from "apollo-upload-client";
import { publicKey as pbKey } from "utilities/constants";
import { paths } from "routers/routes";

interface ApolloClientContextProps {
  updateHeader: (value: VarReqHeader) => void;
}

interface VarReqHeader {
  oriSourceSystem?: string
  partnerSourceSystem?: string
  custid?: string
  SESSIONID?: string
  crn?: string
}

const ApolloClientContext = createContext<ApolloClientContextProps>(null);

const ApolloClientProvider = ({ children }) => {
  const [varReqHeader, setVarReqHeader] = useState<VarReqHeader>({
    oriSourceSystem: "",
    partnerSourceSystem: "",
    custid: "",
    SESSIONID: "",
    crn: "",
  });

  useEffect(() => {
    const secretKey = sessionStorage.getItem("secretKey");
    const token = sessionStorage.getItem("token");
    (!secretKey || !token) && generateKey();
  }, []);

  const getKey = async () => {
    var secretKey = sessionStorage.getItem("secretKey");
    var token = sessionStorage.getItem("token");
    if (!secretKey || !token) {
      const { secretKey: sKy, token: tkn } = generateKey();
      secretKey = sKy;
      token = tkn;
    }
    return {
      secretKey,
      token,
    };
  };

  const generateKey = () => {
    const secretKey = CryptoJS.lib.WordArray.random(32).toString();
    const publicKey = pbKey;
    const buffer = Buffer.from(secretKey);
    const token = crypto.publicEncrypt(publicKey, buffer).toString("base64");
    sessionStorage.setItem("secretKey", secretKey);
    sessionStorage.setItem("token", token);
    return {
      secretKey,
      token,
    };
  };

  const updateHeader = (value: VarReqHeader) => {
    setVarReqHeader({ ...varReqHeader, ...value });
  }

  const interceptor = async (url, opts) => {
    const { headers } = opts;
    headers["token"] = (await getKey()).token;
    headers["APPPUBLICIP"] = (await publicIpv4()) || "";
    headers["oriSourceSystem"] = varReqHeader.oriSourceSystem;
    headers["partnerSourceSystem"] = varReqHeader.partnerSourceSystem;
    headers["custid"] = varReqHeader.custid;
    headers["SESSIONID"] = varReqHeader.SESSIONID;
    headers["crn"] = varReqHeader.crn;
    if (
      typeof opts.body === "string" &&
      process.env.REACT_APP_E2E_ENCRYPTION_WITH_GQL
    ) {
      headers["content-type"] = "text/plain;charset=utf-8";
      const body = encrypt(opts.body);
      const newOptions = { ...opts, headers, body };
      return trackPromise(
        fetch(url, newOptions).then((res) => {
          const { status, statusText, headers } = res;
          const init = { status, statusText, headers };
          return res.text().then((data) => {
            if (process.env.REACT_APP_E2E_ENCRYPTION_WITH_GQL) {
              const decryptedData = decrypt(data);
              return new Response(decryptedData, init);
            }
            return new Response(data, init);
          });
        })
      );
    } else {
      return trackPromise(fetch(url, opts));
    }
  };

  const authMiddleware = new ApolloLink((operation, forward) => {
    var headers = operation.getContext().headers;
    headers = {
      ...headers,
      "apollo-require-preflight": true,
      USERAGENT: window.navigator.userAgent,
      dateTime: moment().format(),
      LANG: localStorage.getItem("lang") || "en",
      sourceSystem: process.env.REACT_APP_SOURCE_SYSTEM || "PYP",
    };
    operation.setContext({ headers });
    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    graphQLErrors &&
      graphQLErrors.forEach((err) => {
        if (err.extensions.code === "890001") {
          if (!/wv/.test(navigator.userAgent.toLowerCase())) {
            var url = window.location.href;
            url = url.substring(0, url.indexOf(process.env.PUBLIC_URL));
            window.location.href = `${url}${process.env.PUBLIC_URL}/${paths.Playground}`;
          }
        } else {
          console.log(`[GRAPHQL ERROR] ${err.message}`);
        }
      });
    networkError && console.log(`[NETWORK ERROR] ${networkError.message}`);
  });

  const uploadLink = createUploadLink({
    uri: process.env.REACT_APP_GQL_HOST,
    fetch: interceptor,
    maxFileSize: 5242880,
  });

  const link = ApolloLink.from([authMiddleware, errorLink, uploadLink]);

  const client = new Client({
    link: link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloClientContext.Provider
      value={{
        updateHeader,
      }}
    >
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ApolloClientContext.Provider>
  );
};

export { ApolloClientContext, ApolloClientProvider };
