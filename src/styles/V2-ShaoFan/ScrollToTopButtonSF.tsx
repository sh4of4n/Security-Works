/** @jsxImportSource @emotion/react */
import { ArrowUpCircle, ArrowUpSquareFill } from "react-bootstrap-icons";
import { PartnerContext } from "contexts/PartnerContext";
import React, { ReactNode, useState, useContext } from "react";
import ButtonSF from "./ButtonSF";
import { Component } from "iconsax-react";
import { Button as BSButton, Container} from "react-bootstrap";
import ScrollToTopButtonSFCss from "styles/V2-ShaoFan/ScrollToTopButtonSFCss";

interface ScrollTopProps{
  label?:string;
  disabled: boolean;
  className?: string;
  icon?: React.ReactNode;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
}

const ScrollToTopButtonSF = ({
  label,
  disabled,
  className,
  icon,
  onClick,
}: ScrollTopProps) => {
  const { theme } = useContext(PartnerContext);

  return (
    <>
    {/* <ArrowUpCircle
      onClick={handleScrollToTop}
      css={ScrollToTopButtonSFCss(theme)}
      className="scroll-to-top-button"
    /> */}
    <BSButton 
      className={className}
      onClick={onClick}
      disabled={disabled}
      
      >
        <Container>
            {icon}
            {label}
        </Container>
      </BSButton>
  </>
  );
  
};

export default ScrollToTopButtonSF;

