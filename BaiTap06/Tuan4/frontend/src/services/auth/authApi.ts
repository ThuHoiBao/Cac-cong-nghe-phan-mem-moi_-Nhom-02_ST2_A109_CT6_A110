// src/services/auth/authApi.ts
import axios from 'axios';
import instance from './axios.customize'; // ✅ import instance
import { RegisterUserResponseDTO } from '../../dto/responseDTO/RegisterUserResponseDTO';

const API_URL = 'http://localhost:8088/api/auth';

// ✅ Đăng ký user
export const registerUser = async (userDto: RegisterUserResponseDTO) => {
  console.log(userDto.toPlain());
  return await axios.post(`${API_URL}/register`, userDto.toPlain());
};

// ✅ Đăng nhập user
export const loginUser = async (loginData: { email: string; password: string }) => {
  return await axios.post(`${API_URL}/login`, loginData);
};

// ✅ API gọi thử protected route
export const getProtected = async () => {
  return await instance.get(`/api/protected`);
};
