/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            ChanYM    1.0.0           - Create Breadcrumb component
*/

import React from "react";
import Text from "./Text";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";

interface BreadcrumbProps {
  active: string;
  children?: string;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  active,
  children,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <Container className={className}>
      {children && 
        <>
          <Text onClick={() => navigate(-1)} label={children}/>
          <Text label=" > "/>
        </>
      }
      <Text label={active}/>
    </Container>
  );
};

export default Breadcrumb;
