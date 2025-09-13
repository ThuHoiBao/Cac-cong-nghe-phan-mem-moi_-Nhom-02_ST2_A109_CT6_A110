// client/src/components/Modal/Modal.jsx
import React from 'react';
import './Modal.css';  // Nhúng CSS cho Modal
import Button from '../Button/Button.jsx';  // Nhúng Button component

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Modal;
