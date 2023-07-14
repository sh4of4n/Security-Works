/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
21/06/2023            SawYN     1.0.0           - Create PageTemplate component
30/06/2023            SawYN     1.0.1           - Add dummy array into Header props
                                                - Add in pin feature into SideMenu

*/

/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Container } from "react-bootstrap";
import { PartnerContext } from "contexts/PartnerContext";
import PageTemplateCss from "styles/components/PageTemplateCss";

interface PageTemplateProps {
  children: JSX.Element | JSX.Element[]
}

const PageTemplate = ({children}:PageTemplateProps) => {
  const { theme } = useContext(PartnerContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [pin, setPin] = useState(false);

  //to delete -- for testing
  const testArray = ["Hi", "last login: 2023/07/03 19:27", "failed login: 2"];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(()=>{
    if(windowSize < 1118){
      setPin(false);
    }
  }, [windowSize]);

  return (
    <Container css={PageTemplateCss(theme)} className="p-0 d-flex flex-column">
      <Header 
        descriptions={testArray}
        username="SUPER SUPER ADMIN"
      />

      <Container className="p-0 d-flex">
        <SideMenu 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pin={pin}
          setPin={setPin}
          username="SUPER SUPER ADMIN"
          className={((windowSize <= 1118 && !menuOpen)) ? 
            "sidemenu-open" : (((windowSize > 1118 && menuOpen) || pin)  ? "" : "sidemenu-hide")
          }
        />
        <Container className={(windowSize <= 1118 && !menuOpen) ? "sidemenu-drop" : "d-none"}/>
        <Container className="p-0 py-5 page-body">{children}</Container>
      </Container>
    </Container>
  );
}

export default PageTemplate;