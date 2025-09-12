// src/route/categoryRoute.ts
import { Router } from 'express';
import CategoryController from '../controller/categoryController.ts';

const router = Router();

// Định nghĩa route cho API load tất cả sản phẩm
router.get('/categorys', CategoryController.getAllCategorys);

export default router;
