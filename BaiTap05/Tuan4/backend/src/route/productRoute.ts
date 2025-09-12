// // src/route/productRoute.ts
// import { Router } from 'express';
// import ProductController from '../controller/productController.ts';

// const router = Router();

// // Định nghĩa route cho API load tất cả sản phẩm
// router.get('/products', ProductController.getAllProducts);

// export default router;


import { Router } from 'express';
import ProductController from '../controller/productController.ts';

const router = Router();

// Route lấy tất cả sản phẩm
router.get('/products', ProductController.getAllProducts);

// Route tìm kiếm sản phẩm
router.get('/products/search', ProductController.searchProducts);

export default router;
