// // src/services/auth/productApi.ts
// import axios from 'axios';

// const API_URL = 'http://localhost:8088/api';

// export const getAllCategories = async () => {
//   return await axios.get(`${API_URL}/categorys`);
// };

// export const getAllProducts = async (page: number, pageSize: number) => {
//   return await axios.get(`${API_URL}/products`, {
//     params: { page, pageSize },
//   });
// };


import axios from 'axios';

const API_URL = 'http://localhost:8088/api';

export const getAllCategories = async () => {
  return await axios.get(`${API_URL}/categorys`);
};

export const getAllProducts = async (page: number, pageSize: number) => {
  return await axios.get(`${API_URL}/products`, {
    params: { page, pageSize },
  });
};

// API tìm kiếm sản phẩm
export const searchProducts = async (query: string, categoryId: string | null, minPrice: number | null, maxPrice: number | null,page: number, pageSize: number) => {
  return await axios.get(`${API_URL}/products/search`, {
    params: { query, categoryId, minPrice, maxPrice,page,pageSize},
  });
};
