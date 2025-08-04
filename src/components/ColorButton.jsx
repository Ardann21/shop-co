import React, { useState } from 'react';
import checkw from '../assets/checkw.png'; // Make sure the path is correct

const ColorButton = ({ color }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  

  return (
    <button
      onClick={handleToggle}
      className={`p-3 flex justify-center items-center rounded-full cursor-pointer border border-gray-300`}
      style={{ backgroundColor: color }}
    >
      {/* Only show the checkmark if this specific button is checked */}
      {isChecked && (
        <img className='absolute h-4 w-4 ' src={checkw} alt="checked" />
      )}
    </button>
  );
};

export default ColorButton;