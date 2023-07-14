/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
14/06/2023            SawYN     1.0.0           - Create Input component
*/

/** @jsxImportSource @emotion/react */
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
//<<<<<<< .mine
//import InputCss from "styles/components/InputCss";
//||||||| .r1118
//import InputCss from "styles/components/InputCss";
//=======
//>>>>>>> .r1120

interface TextFieldProps {
  id?: string;
  type?: "text" | "number" | "date";
  label: string;
  value: string | number;
  disabled?: boolean
  min?: number;
  max?: number;
  className?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  maxLength?: number;
}

const Input = ({
  id,
  type = "text",
  label,
  value,
  disabled = false,
  min,
  max,
  className,
  onChange,
  onBlur,
  maxLength,
}:TextFieldProps) => {

  return(
//<<<<<<< .mine
    //<Form.Group css={InputCss} className={className}>
//||||||| .r1118
    //<Form.Group css={InputCss} className={className}>
//=======
    <Form.Group className={className}>
{/* >>>>>>> .r1120 */}
      <FloatingLabel
        controlId={id}
        label={label}
      >
        <Form.Control
          type={type}
          maxLength={maxLength}
          placeholder={label}
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          disabled={disabled}
        />
      </FloatingLabel>
    </Form.Group>
  );
}

export default Input;