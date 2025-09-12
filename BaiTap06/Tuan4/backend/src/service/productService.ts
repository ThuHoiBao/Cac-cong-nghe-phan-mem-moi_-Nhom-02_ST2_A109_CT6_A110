import ProductRepository from '../repository/productRepository.ts';
import { ProductResponseDTO } from '../dto/responseDTO/productResponse.ts';

class ProductService {
  public async getAllProducts(page: number, pageSize: number) {
    try {
    const skip = (page - 1) * pageSize;
    const products = await ProductRepository.findAll(skip, pageSize);
    const totalCount = await ProductRepository.count();
    const totalPages = Math.max(Math.ceil(totalCount / pageSize), 1); // Đảm bảo có ít nhất 1 trang
    console.log("tổng phần tử: "+ totalCount)
    console.log("tổng trang: "+ totalPages)
    console.log(products);
      const productDTOs: ProductResponseDTO[] = products.map(product => {
        const productDTO = new ProductResponseDTO();
        productDTO.id = product.id.toString();
        productDTO.productName = product.productName;
        productDTO.image = product.image;
        productDTO.status = product.status;
        productDTO.description = product.description;
        productDTO.quantity = product.quantity;
        productDTO.price = product.price;
        return productDTO.toPlain();
      });

      return { productDTOs, totalPages };
    } catch (error) {
      throw new Error('Lỗi khi lấy sản phẩm');
    }
  }

  
public async searchProducts(query: string, categoryId: string | null, minPrice: number | null, maxPrice: number | null, page: number, pageSize: number) {
  try {
    const skip = (page - 1) * pageSize;
    const { products,totalCount } = await ProductRepository.searchProducts(query, categoryId, minPrice, maxPrice, skip, pageSize);
    console.log(products);    
    console.log("Tổng phần tử: " + totalCount); 
    // Tính tổng số trang
    const totalPages = Math.max(Math.ceil(Number(totalCount) / pageSize), 1); // Đảm bảo totalCount là số
    console.log("Tổng trang: " + totalPages);
    const productDTOs: ProductResponseDTO[] = products.map(product => {
      const productDTO = new ProductResponseDTO();
      productDTO.id = product.id.toString();
      productDTO.productName = product.productName;
      productDTO.image = product.image;
      productDTO.status = product.status;
      productDTO.description = product.description;
      productDTO.quantity = product.quantity;
      productDTO.price = product.price;
      return productDTO.toPlain();
    });

    return { productDTOs, totalPages };
  } catch (error) {
    console.error('Lỗi khi tìm kiếm sản phẩm:', error);
    throw new Error('Lỗi khi tìm kiếm sản phẩm');
  }
}
}

export default new ProductService();
