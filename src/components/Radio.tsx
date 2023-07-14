/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            Steven    1.0.0           - Create Radio component
*/

import React from "react";
import { Container, Form } from "react-bootstrap";

interface RadioProps {
  label: string;
  value: boolean;
  disabled?: boolean;
  onClick: (value: boolean) => void;
  className?: string;
}

const Radio = ({
  label,
  value,
  disabled = false,
  onClick,
  className,
}: RadioProps) => {
  return (
    <Container>
      <Form.Check
        label={label}
        checked={value}
        type={"radio"}
        disabled={disabled}
        onChange={() => onClick(!value)}
        className={className}
      />
    </Container>
  );
};

export default Radio;
