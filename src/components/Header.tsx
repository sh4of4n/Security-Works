/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
21/06/2023            SawYN     1.0.0           - Create Header component

*/

/** @jsxImportSource @emotion/react */
// import { RouteContext } from "contexts/RouteContext";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Profile } from "iconsax-react";
import { BoxArrowRight } from "react-bootstrap-icons";
import { PartnerContext } from "contexts/PartnerContext";
import HeaderCss from "styles/components/HeaderCss";
import { FinexusLogo } from "./Images";
import Text from "./Text";
import { NavDropdown } from "react-bootstrap";

interface HeaderProps {
  username: string;
  descriptions: any
}

const Header = ({
  username,
  descriptions
}: HeaderProps) => {
  // const { goTo } = useContext(RouteContext); 
  const { theme } = useContext(PartnerContext);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [currentDesc, setCurrentDesc] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const onChangePasswordClick = () => {

  } 

  const onSecurityPwdClick = () => {
    
  } 

  const onLogoutCLick = () => {
    
  }

  useEffect(()=>{
    setTimeout(()=>{
      if(currentDesc < descriptions.length-1){
        setCurrentDesc(currentDesc+1);
      }else{
        setCurrentDesc(0);
      }
    }, 4000);
  },[currentDesc, descriptions])

  return (
    <Container css={HeaderCss(theme)}>
      <Container className="p-0">
        <FinexusLogo/>
      </Container>
      <Container className="w-100 p-0 justify-content-end text-end">
        <Container className="p-0 d-flex align-items-center justify-content-end">
          {windowSize >= 1118 && <Text label={username} className="me-2 name"/>}
          <NavDropdown title={<Profile/>}>
            <NavDropdown.Item onClick={() => onChangePasswordClick()}>Change Password</NavDropdown.Item>
            <NavDropdown.Item onClick={() => onSecurityPwdClick()}>Security Question</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item onClick={() => onLogoutCLick()}><BoxArrowRight className="me-1"/> Log Out</NavDropdown.Item>
          </NavDropdown>
        </Container>
        <Container className="p-0">
          <Text label={descriptions[currentDesc]} className="description" skipTranslate/>
        </Container>
      </Container>
    </Container>
  );
}

export default Header;