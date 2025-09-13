// client/src/components/Button/Button.jsx
import React from 'react';
import './Button.css';  // Nhúng CSS cho Button

const Button = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
