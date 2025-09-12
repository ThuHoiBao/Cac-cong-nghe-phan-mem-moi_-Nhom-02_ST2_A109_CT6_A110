import React, { useEffect, useState } from 'react';
import { getAllCategories, searchProducts } from '../../services/productApi';
import ProductCard from '../productComponent/ProductCard';
import CategoryCard from '../categoryComponent/CategoryCard';
import './HomePage.css';
import image from "../../images/social.png"
import { getProtected } from '../../services/auth/authApi';
import { UserResponseDTO } from '../../dto/responseDTO/UserResponseDTO';
const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [user, setUser] = useState<UserResponseDTO | null>(null);  // Fetch dữ liệu danh mục
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        if (response.data) {
          setCategories(response.data); // Lưu danh mục vào state
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    const fetchProtected = async () => {
      try {
        const res = await getProtected();
        // Kiểm tra nếu trả về dữ liệu người dùng hợp lệ
        if (res.data && res.data.user) {
          const user = new UserResponseDTO();
          user.id = res.data.user.id;
          user.firstName = res.data.user.firstName;
          user.lastName = res.data.user.lastName;
          user.email = res.data.user.email;

          setUser(user);  // Cập nhật thông tin người dùng vào state
        } else {
          setUser(null); // Nếu không có dữ liệu người dùng, set null
        }
      } catch (error) {
        console.error("Token invalid or expired:", error);
        setUser(null); // Nếu token không hợp lệ, set user null
      }
    };
    fetchProtected();
    fetchCategories();
  }, []); // Fetch danh mục chỉ 1 lần khi component mount

  // Xử lý tìm kiếm sản phẩm
  const handleSearch = async () => {
    try {
      const response = await searchProducts(
        searchQuery, 
        selectedCategory === 'all' ? null : selectedCategory, // Nếu chọn "All", không áp dụng bộ lọc danh mục
        minPrice, 
        maxPrice, 
        currentPage, 
        4
      );
      if (response && response.data) {
        setProducts(response.data.productDTOs); // Cập nhật sản phẩm sau khi tìm kiếm
        setTotalPages(response.data.totalPages); // Cập nhật tổng số trang
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  // Lọc theo danh mục
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Đặt lại trang đầu tiên khi chọn danh mục
  };

  // Lọc theo giá
  const handlePriceFilterChange = () => {
    setCurrentPage(1); // Đặt lại trang đầu tiên khi lọc giá
  };

  // Thay đổi trang
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Thay đổi trang
    handleSearch(); // Gọi lại hàm tìm kiếm để tải sản phẩm theo trang mới
  };

  // Fetch sản phẩm (tùy theo currentPage đã thay đổi trong handleSearch)
useEffect(() => {
  handleSearch();  // Mỗi khi currentPage thay đổi, gọi lại hàm tìm kiếm để tải sản phẩm theo trang mới
}, [currentPage]);  // Chạy lại khi currentPage hoặc searchQuery thay đổi

  return (
    <div className="home-page">
      {/* Tiêu đề với logo */}
      <h1>
        <img src={image} alt="Shopee" className="logo" /> New Arrivals
      </h1>
      <p>
        Xin chào <b>{user?.firstName} {user?.lastName}</b>, Chào mừng bạn đến với cửa hàng chúng tôi! 🎉
      </p>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật giá trị tìm kiếm
          placeholder="Search products..."
        />
        <button onClick={handleSearch}>Search</button> {/* Bấm để tìm kiếm */}
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="price-filter">
          <input
            type="number"
            value={minPrice || ''}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min Price"
          />
          <input
            type="number"
            value={maxPrice || ''}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max Price"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <div className="category-list">
          <CategoryCard
            key="all"
            category={{ id: 'all', categoryName: 'All' }}
            isSelected={selectedCategory === 'all'}
            onClick={() => handleCategoryChange('all')}
          />
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id} // Check xem danh mục đã được chọn chưa
                onClick={() => handleCategoryChange(category.id)} // Thêm event click vào category
              />
            ))
          ) : (
            <p>No categories available</p> // Nếu không có danh mục
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="products">
        <div className="product-list">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} /> // Hiển thị từng sản phẩm
            ))
          ) : (
            <p>No products available</p> // Nếu không có sản phẩm
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {totalPages > 0 &&
            Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
