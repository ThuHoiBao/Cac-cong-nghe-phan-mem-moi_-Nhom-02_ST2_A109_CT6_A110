// authRoutes.js
import express from 'express';
import { registerUser, loginUser} from '../controller/authController.ts'; // Đảm bảo import đúng cách
const router = express.Router();

// Các route sử dụng các controller
router.post('/register', registerUser);  // Đăng ký
router.post('/login', loginUser);        // Đăng nhập

 // Thêm route để verify OTP
export default router;
