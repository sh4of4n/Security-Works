/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            LimSF    1.0.0           - Create Button component
05/07/2023            LimSF    1.0.1           - Add in iconLeft and iconRight
*/

import React from "react";
import { Button as BSButton, Container} from "react-bootstrap";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  value?: boolean;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

const Button = ({
  label,
  onClick,
  disabled = false,
  className,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  return (
      <BSButton
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        <Container>
          {iconLeft} 
          {label}
          {iconRight}
        </Container>
      </BSButton>
  );
};

export default Button;

