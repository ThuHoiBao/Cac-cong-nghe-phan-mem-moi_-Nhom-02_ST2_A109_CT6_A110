// client/src/components/Cart/Cart.jsx
import React, { useState } from 'react';
import InputText from '../InputText/InputText.jsx';
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';
import Modal from '../Modal/Modal.jsx';
import './Cart.css';  // Nhúng CSS cho Cart

const Cart = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = () => {
    setItems([...items, { ...newItem, id: Date.now() }]);
    setNewItem({ name: '', price: '' });
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <InputText
        label="Product Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Enter product name"
      />
      <InputText
        label="Product Price"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        placeholder="Enter product price"
      />
      <Button onClick={handleAddItem}>Add Item</Button>

      <div className="cart-items">
        {items.map(item => (
          <Card key={item.id} product={item} onRemove={handleRemoveItem} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h4>Are you sure you want to delete this item?</h4>
      </Modal>
    </div>
  );
};

export default Cart;
