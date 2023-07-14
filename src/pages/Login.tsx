/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
15/06/2023            SawYN     1.0.0           - Create Login page
26/06/2023            SawYN     1.0.1           - Implement styling
*/

/** @jsxImportSource @emotion/react */
import AdvancedInput from "components/AdvancedInput";
import Panel from "components/Panel";
import Text from "components/Text";
import React, { useContext, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Sms, SecuritySafe } from "iconsax-react"
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import LoginCss from "styles/pages/LoginCss";
import { PartnerContext } from "contexts/PartnerContext";
import { ChevronRight } from "react-bootstrap-icons";
import { FinexusLogo, LoginBG, ProfilePic } from "components/Images";

const Login = () => {
  const { theme } = useContext(PartnerContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = [
    {key: 0, value: "English"},
    {key: 1, value: "Bahasa Melayu"},
    {key: 2, value: "Chinese"},
    {key: 3, value: "Tamil"},
  ]

  const onlanguagechange = (value) => {
    setLanguage(value);
    console.log(value);
  }

  return (
    <Container css={LoginCss(theme)} className="p-0">
      <LoginBG className="login-bg"/>
      <FinexusLogo className="logo"/>
      <Panel className="login-panel p-4">
        
        <Container className="d-flex justify-content-between align-items-center mb-3">
        <Container className="d-flex align-items-end p-0 d-flex">
          <ProfilePic className="profile-pic"/>
          <Text label="Hello." className="title ms-3"/>
        </Container>
          
          <Dropdown className="p-0 w-auto m-0">
            <Dropdown.Toggle className="dropdown-toggle">
              <Text label={language} className="description d-inline-block"/>
              <ChevronRight size={12} className="ms-1 icon"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {languages.map((data) => {
                return(
                  <Dropdown.Item onClick={() => onlanguagechange(data.value)}>{data.value}</Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Container>

        <Container className="p-0">
          <AdvancedInput 
            label="Email" 
            onChange={(value) => {
              setEmail(value);
            }}
            value={email}
            placeholder="Enter Email"
            leftIcon={<Sms size={18}/>}
            className="mb-3 input"
          />
          
          <AdvancedInput 
            label="Password" 
            mask
            onChange={(value) => {
              setPassword(value);
            }}
            placeholder="Enter Password"
            value={password}
            leftIcon={<SecuritySafe size={18}/>}
            className="mb-3 input"
          />
        </Container>

        <Container className="d-flex p-0 pe-3">
          <Checkbox
            label="Remember Me"
            value={remember}
            onClick={(value) => {setRemember(value)}}
            className="checkbox"
          />

          <Text 
            label="Forgot password?" 
            onClick={()=>{}} 
            className="w-100 d-flex justify-content-end description description-clickable"
          />
        </Container>
        
          <Container>
            <Button
              label="LOGIN"
              onClick={()=>{}}
              className="d-block m-auto w-100 mt-4 mb-2 button"
            />
          </Container>
      </Panel>

      <Container className="bottom-text-container">
        <Text label="© Finexus 2018. All Rights Reserved" className="bottom-text"/>
        <Text label="About Us | Privacy Policy | Terms of Use" className="bottom-text"/>
      </Container>
    </Container>
  );
}

export default Login;