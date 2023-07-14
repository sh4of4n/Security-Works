/** @jsxImportSource @emotion/react */
import { ArrowUpSquareFill } from "react-bootstrap-icons";
import { PartnerContext } from "contexts/PartnerContext";
import React, { ReactNode, useState, useContext } from "react";
import ButtonSF from "./ButtonSF";
import { Component } from "iconsax-react";
import { Container } from "react-bootstrap";
import ScrollToTopButtonSFCss from "styles/V1-ShaoFan/ScrollToTopButtonSFCss";

interface ScrollTopProps{
  label?:string;
  disabled: boolean;
  className?: string;
  icon?: React.ReactNode;
  //onClick: () => void;
}

const ScrollToTopButtonSF = ({
  label,
  disabled,
  className,
  icon,
  //onClick,
}: ScrollTopProps) => {
  const { theme } = useContext(PartnerContext);

  return (
    <>
    <div>
    <Container >
      <ScrollToTopButtonSF
        css={ScrollToTopButtonSFCss(theme)}
        label={label}
        disabled={disabled}
        className={className}
        icon={icon}
        //onClick={onClick}
      />
    </Container>
    </div>
  </>
  );
  
};

export default ScrollToTopButtonSF;

