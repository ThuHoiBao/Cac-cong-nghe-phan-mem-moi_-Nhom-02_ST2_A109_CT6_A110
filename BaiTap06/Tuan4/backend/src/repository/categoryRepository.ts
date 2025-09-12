/// src/repository/CategoryRepository.ts
import Category from '../models/category.ts';

class CategoryRepository {
  // Tìm tất cả sản phẩm
  public async findAll() {
    try {
      const categorys = await Category.find();
      console.log(categorys) // Truy vấn tất cả sản phẩm từ MongoDB
      return categorys;
    } catch (error) {
      throw new Error('Lỗi khi truy vấn dữ liệu sản phẩm');
    }
  }
}

export default new CategoryRepository();
