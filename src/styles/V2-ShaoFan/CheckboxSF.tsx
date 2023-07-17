import Checkbox from 'components/Checkbox';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

interface CheckboxProps {
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

const CheckboxSF = ({
  label,
  options,
  disabled = false,
  className,
  icon,
}:CheckboxProps) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectedOptions = (selected, isChecked) => {
      if (isChecked) {
        setSelectedOptions([...selectedOptions, selected]);
      } else {
        setSelectedOptions(selectedOptions.filter((value) => value !== selected));
      }
    };
  

  return (
    <>
    {options.map((option) => (
    <Container key={option.value}>
    <Checkbox
        value={selectedOptions.includes(option.value)}
        label={option.value}
        disabled={disabled}
        onClick={(isChecked) =>
        handleSelectedOptions(option.value, isChecked)
        }
    />
    </Container>
    ))}
    </>
  );
};

export default CheckboxSF;