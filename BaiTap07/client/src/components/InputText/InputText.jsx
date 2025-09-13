// client/src/components/InputText/InputText.jsx
import React from 'react';
import './InputText.css';  // Nhúng CSS cho InputText

const InputText = ({ label, value, onChange, placeholder }) => (
  <div className="input-wrapper">
    <label className="input-label">{label}</label>
    <input
      className="input-text"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputText;
