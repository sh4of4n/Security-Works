/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            SawYN     1.0.0           - Create RouteContext and RouteContextProvider 
*/

/* eslint-disable react-hooks/exhaustive-deps */
import nonAuthRoutes from "routers/non-auth";
import publicRoutes from "routers/public";
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { paths } from "routers/routes";

interface RouteContextProps {
  checkValidPath: (path?: string) => boolean
  getAbsolutePath: () => string
  goTo: (path: string | number, params?: any, replace?: boolean) => void
  getRouteParams: () => any
  urlParams: string
  setUrlParams: Dispatch<SetStateAction<string>>
  isBasePath: () => boolean
}

const RouteContext = createContext<RouteContextProps>(null);

const RouteContextProvider = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [urlParams, setUrlParams] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = decodeURIComponent(location.search.substring(1));
    setUrlParams(searchParams);
  }, [])

  useEffect(() => {
    const absolutePath = getAbsolutePath();
    if (checkValidPath() && !nonAuthRoutes.includes(absolutePath) && publicRoutes.includes(absolutePath)) {
      sessionStorage.setItem("path", absolutePath);
    }
    if (location) {
      setReady(true);
    }
  }, [location])

  /** check current path whether is valid (configured in `routes.ts`) */
  const checkValidPath = (path?: string) => {
    const absolutePath = path ? path : location.pathname.substring(1);
    return Object.values(paths).includes(absolutePath);
  }

  /** get current path */
  const getAbsolutePath = () => {
    return location.pathname.substring(1);
  }

  /** customised navigate 
   *  @param path path that had been configured in `routes.ts`
   *  @param params parameters that needed to pass into the path
  */
  const goTo = (path: string | number, params?: any, replace?: boolean) => {
    if (typeof path === "string") {
      navigate(path, { state: params, replace });
    } else {
      navigate(-1);
    }
  }

  /** get the parameters in current path */
  const getRouteParams = () => {
    return location.state;
  }

  /** check current URL whether is base path */
  const isBasePath = () => {
    return window.location.pathname === process.env.PUBLIC_URL || window.location.pathname === `${process.env.PUBLIC_URL}/`;
  }

  return (
    <RouteContext.Provider value={{
      checkValidPath,
      getAbsolutePath,
      goTo,
      getRouteParams,
      urlParams,
      setUrlParams,
      isBasePath
    }}>
      {ready && children}
    </RouteContext.Provider>
  )
}

export { RouteContext, RouteContextProvider };