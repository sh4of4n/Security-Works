/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            LimSF    1.0.0           - Create Panel component
*/

import React from 'react';
import { Container } from 'react-bootstrap';

interface PanelProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Panel = ({
  children,
  className,
}: PanelProps) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

export default Panel;

