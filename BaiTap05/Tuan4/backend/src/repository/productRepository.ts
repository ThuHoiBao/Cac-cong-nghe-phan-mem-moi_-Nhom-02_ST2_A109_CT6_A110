import Product from '../models/product.ts';
import Fuse from 'fuse.js';  // Import fuse.js

class ProductRepository {
  public async findAll(skip: number, limit: number) {
    return Product.find().skip(skip).limit(limit);
  }

  public async count() {
    return Product.countDocuments();
  }
  // Tìm kiếm sản phẩm với Fuzzy Search và lọc theo danh mục và giá với phân trang
  // src/repository/productRepository.ts
public async searchProducts(query: string, categoryId: string | null, minPrice: number | null, maxPrice: number | null, skip: number, limit: number) {
  try {
    let productsQuery = Product.find();
    if (categoryId && categoryId !== 'undefined') {
      productsQuery = productsQuery.where('categoryId').equals(categoryId);
    }
    if (minPrice !== null && minPrice !== undefined) {
      productsQuery = productsQuery.where('price').gte(minPrice);
    }
    if (maxPrice !== null && maxPrice !== undefined) {
      productsQuery = productsQuery.where('price').lte(maxPrice);
    }
    const products = await productsQuery;

    if (!query || query.trim() === '') {
      const paginatedResults = products.slice(skip, skip + limit);
      return { products: paginatedResults, totalCount: products.length };
    }
    const fuse = new Fuse(products, {
      keys: ['productName', 'description'], 
      threshold: 0.3, 
    });
    const result = fuse.search(query); 
    const paginatedResults = result.slice(skip, skip + limit); // Cắt kết quả tìm kiếm thành các trang
    // Trả về sản phẩm phân trang
    return { products: paginatedResults.map(item => item.item),totalCount: result.length };

  } catch (error) {
    console.error("Error searching products:", error);
    throw new Error('Lỗi khi tìm kiếm sản phẩm');
  }
}
}

export default new ProductRepository();
