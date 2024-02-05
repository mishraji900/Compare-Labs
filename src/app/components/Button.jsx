// Button.js

import React from 'react';

const Button = ({ className, text, link }) => {
  const handleButtonClick = () => {
    // Redirect to the provided link when the button is clicked
    window.location.href = link;
  };

  return (
    <button
      className={`${className}  py-2 px-4 rounded font-semibold md:text-lg focus:outline-none focus:shadow-outline`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
