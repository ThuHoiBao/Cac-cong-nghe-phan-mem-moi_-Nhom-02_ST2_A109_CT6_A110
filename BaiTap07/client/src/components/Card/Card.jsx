// client/src/components/Card/Card.jsx
import React from 'react';
import './Card.css';  // Nhúng CSS cho Card
import Button from '../Button/Button.jsx';

const Card = ({ product, onRemove }) => (
  <div className="card">
    <div className="product-details">
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">${product.price}</p>
    </div>
    <Button onClick={() => onRemove(product.id)}>Remove</Button>
  </div>
);

export default Card;
