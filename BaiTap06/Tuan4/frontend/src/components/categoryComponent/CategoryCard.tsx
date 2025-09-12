import React from 'react';
import './CategoryCard.css'; // Import CSS

interface CategoryCardProps {
  category: {
    id: string;
    categoryName: string;
  };
  isSelected: boolean; // Thêm props isSelected để kiểm tra xem danh mục đã được chọn hay chưa
  onClick: (id: string) => void; // Thêm props để truyền vào function khi click vào category
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isSelected, onClick }) => {
  return (
    <div
      className={`category-card ${isSelected ? 'selected' : ''}`} // Thêm class 'selected' khi category đã được chọn
      onClick={() => onClick(category.id)}
    >
      <h3>{category.categoryName}</h3>
      {isSelected && <span className="selected-label">Selected</span>} {/* Hiển thị label khi danh mục được chọn */}
    </div>
  );
};

export default CategoryCard;
