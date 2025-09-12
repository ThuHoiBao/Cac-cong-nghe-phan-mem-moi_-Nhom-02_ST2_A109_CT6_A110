// src/service/categoryService.ts
import CategoryRepository from '../repository/categoryRepository.ts';
import { ProductResponseDTO } from '../dto/responseDTO/productResponse.ts';

class CategoryService {
  // Lấy tất cả sản phẩm từ database
  public async getAllCategorys() {
    try {
      const categorys = await CategoryRepository.findAll(); // Lấy tất cả sản phẩm từ repository
      return categorys;  // Trả về mảng DTO thay vì mảng sản phẩm gốc
    } catch (error) {
      throw new Error('Lỗi khi lấy danh muc');
    }
  }
}

export default new CategoryService();
