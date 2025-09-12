import React from 'react';
import { ProductRequestDTO } from '../../dto/requestDTO/ProductRequestDTO';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductRequestDTO;
}

// Hàm để định dạng giá thành dạng có dấu phân cách hàng nghìn
const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN');  // Định dạng giá theo chuẩn Việt Nam
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.description}</p>
      <div className="price">
        {formatPrice(product.price)} VNĐ {/* Hiển thị giá theo định dạng Việt Nam */}
        {/* Giả sử bạn có giá giảm */}
        <span className="discount">{formatPrice(product.quantity * 1.2)} VNĐ</span> 
      </div>
    </div>
  );
};

export default ProductCard;
