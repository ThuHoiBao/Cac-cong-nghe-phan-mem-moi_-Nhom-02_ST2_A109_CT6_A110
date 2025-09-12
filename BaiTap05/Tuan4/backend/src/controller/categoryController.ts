//file categoryController.ts
import CategoryService from '../service/categoryService.ts';
class CategoryController {
// Hàm lấy tất cả sản phẩm
public getAllCategorys = async (req, res)=> {
  try {
    const categorys = await CategoryService.getAllCategorys(); // Gọi Service
    return res.status(200).json(categorys);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
};
}
export default new CategoryController();