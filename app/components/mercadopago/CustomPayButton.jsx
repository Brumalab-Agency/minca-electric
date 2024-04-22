import React from 'react';

const CustomPayButton = ({ onClick, text, customStyles }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button onClick={handleClick} style={customStyles}>
      {text}
    </button>
  );
};

export default CustomPayButton;