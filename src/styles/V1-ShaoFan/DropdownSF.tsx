import React, { ReactNode, useContext, useState } from "react";
import { PartnerContext } from "contexts/PartnerContext";
import { Dropdown, Container } from "react-bootstrap";
import ButtonSFCss from "styles/V1-ShaoFan/ButtonSFCss";
import BrowseScreenSFCss from "styles/V1-ShaoFan/BrowseScreenSFCss";
import ButtonSF from "./ButtonSF"
import { css } from "@emotion/react";

interface DropdownProps{
  label?: string;
  options: Array<{
    key: string;
    value: any;
  }>;
  disabled: boolean;
  className?: string;
  onSelect: (value:any) => void;
  icon?: React.ReactNode;
}

const DropdownButton = ({
  label,
  options,
  disabled,
  className,
  onSelect,
  icon,
}: DropdownProps) => {
  const [selectedOptions] = useState([]);

  const handleOptionChange = (selected:any) => {
    if (selected === "Location") {
      console.log("Location");
    } else if (selected === "Date") {
      console.log("Date");
    }
  }

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
            <Container key={option.value} /* css={ButtonSFCss(theme)} */>
              <ButtonSF
                value={selectedOptions.includes(option.value)}
                //iconRight={option.key}
                label={option.value}
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

export default DropdownButton;
