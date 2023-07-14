import React, { useState } from 'react';

const CheckboxSF = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxClick}
        />
      </label>
    </div>
  );
};

export default CheckboxSF;