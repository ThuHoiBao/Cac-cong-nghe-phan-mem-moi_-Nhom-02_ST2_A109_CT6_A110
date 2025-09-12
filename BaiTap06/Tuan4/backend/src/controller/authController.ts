// controller/authController.js
import { registerUserService, loginUserService } from '../service/authService.ts';

// Gửi OTP và đăng ký người dùng
export const registerUser = async (req, res) => {
  try {
    const response = await registerUserService(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Đăng nhập người dùng
export const loginUser = async (req, res) => {
  try {
    const response = await loginUserService(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

