import ProductService from '../service/productService.ts';

class ProductController {
  public getAllProducts = async (req, res): Promise<Response> => {
    const { page, pageSize } = req.query;
    console.log(page,pageSize)
    try {
      const products = await ProductService.getAllProducts(Number(page), Number(pageSize));
      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Lỗi server' });
    }
  };

  // Tìm kiếm sản phẩm
  public searchProducts = async (req, res): Promise<Response> => {
    const { query, categoryId, minPrice, maxPrice, page, pageSize } = req.query;  
    console.log(page,pageSize)
    try {
      const products = await ProductService.searchProducts(
        query,
        categoryId,
        minPrice ? Number(minPrice) : null,
        maxPrice ? Number(maxPrice) : null,
        Number(page),
        Number(pageSize)
      );
      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Lỗi khi tìm kiếm sản phẩm' });
    }
  };
}

export default new ProductController();
