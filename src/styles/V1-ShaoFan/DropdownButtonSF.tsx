/** @jsxImportSource @emotion/react */
import { PartnerContext } from "contexts/PartnerContext";
import React, { ReactNode, useState, useContext } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Checkbox from "../../components/Checkbox";
import ButtonSF from "./ButtonSF";
import BrowseScreenSFCss from "styles/V1-ShaoFan/BrowseScreenSFCss";
import ButtonSFCss from "styles/V1-ShaoFan/ButtonSFCss";

interface DropdownButtonProps {
  label?: string;
  options: Array<{
    key: string;
    value: any;
  }>;
  disabled: boolean;
  className?: string;
  onSelect: (value: any) => void;
  icon?: React.ReactNode;
}

const DropdownButtonSF = ({
  label,
  options,
  disabled = false,
  className,
  icon,
}: DropdownButtonProps) => {
  const [selectedOptions] = useState([]);

  const handleOptionChange = (selected: any) => {
    if (selected === "Export in PDF") {
      console.log("PDF");
    } else if (selected === "Export in Excel") {
      console.log("Excel");
    }
  };

  const { theme } = useContext(PartnerContext);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className={className}>
          {icon} {label}
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <div
            className="dropdown-button-options"
            onClick={(e) => e.stopPropagation()}
          >
            {options.map((option) => (
              <Container key={option.value} css={ButtonSFCss(theme)}>
                <ButtonSF
                  value={selectedOptions.includes(option.value)}
                  iconLeft={option.value}
                  label={option.key}
                  disabled={disabled}
                  className={option.key}
                  onClick={() => {
                    handleOptionChange(option.key);
                  }}
                />
              </Container>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownButtonSF;
