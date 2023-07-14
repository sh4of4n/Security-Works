/** @jsxImportSource @emotion/react */
import { PartnerContext } from "contexts/PartnerContext";
import React, { ReactNode, useState, useContext } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Checkbox from "../../components/Checkbox";
import ButtonSF from "./ButtonSF";
import BrowseScreenSFCss from "styles/V1-ShaoFan/BrowseScreenSFCss";
import ButtonSFCss from "styles/V1-ShaoFan/ButtonSFCss";

interface DropdownCheckboxProps {
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
  
  const DropdownCheckboxSF = ({
    label,
    options,
    disabled = false,
    className,
    icon,
  }: DropdownCheckboxProps) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectedOptions = (selected, isChecked) => {
      if (isChecked) {
        setSelectedOptions([...selectedOptions, selected]);
      } else {
        setSelectedOptions(selectedOptions.filter((value) => value !== selected));
      }
    };
  
    const handleSelectAllOptions = () => {
      const allOptions = options.map((option) => option.value);
  
      setSelectedOptions(allOptions);
    };
  
    const handleClearAllOptions = () => {
      setSelectedOptions([]);
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
                className="dropdown-checkbox-options" 
                onClick={(e) => e.stopPropagation()}
              >
                {options.map((option) => (
                  <div key={option.value}>
                    <Checkbox
                      value={selectedOptions.includes(option.value)}
                      label={option.value}
                      disabled={disabled}
                      onClick={(isChecked) =>
                        handleSelectedOptions(option.value, isChecked)
                      }
                    />
                  </div>
                ))}
              </div>
    
              <Container css={ButtonSFCss(theme)} >
                <ButtonSF onClick={handleSelectAllOptions} label="Select All" className="select-all-button"/>
                <ButtonSF onClick={handleClearAllOptions} label="Clear All" className="clear-all-button"/>
              </Container>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
  };

  export default DropdownCheckboxSF;
