// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/configdb.ts';
import authRoutes from './route/authRoutes.ts';
import protectedRoutes from './route/protectedRoute.ts';
import cors from 'cors';
import db from './models/index.ts';  // Thêm dòng này để import db
import path from 'path';
import { fileURLToPath } from 'url';
import Category from './models/category.ts';  // Đảm bảo đường dẫn đúng
import Product from './models/product.ts';
import productRoute from './route/productRoute.ts';
import categoryRoute from './route/categoryRoute.ts' // Đường dẫn đến productRoute
// Tạo __dirname (vì dùng ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();   
// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'users'));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/', protectedRoutes);
// Sử dụng route để xử lý API
app.use('/api', productRoute);

app.use('/api', categoryRoute);


app.post('/api/category', async (req, res) => {
  const categories = [
    { categoryName: "Iphone" },
    { categoryName: "Samsung" },
    { categoryName: "Vivo" }
  ];

  try {
    // Thêm danh mục vào MongoDB
    const docs = await Category.insertMany(categories);
    console.log("Danh mục đã được thêm:", docs);

    // Lấy ObjectId của từng danh mục sau khi đã thêm vào CSDL
    const iphoneCategoryId = docs[0]._id;  // Lấy ObjectId của "Iphone"
    const samsungCategoryId = docs[1]._id; // Lấy ObjectId của "Samsung"
    const vivoCategoryId = docs[2]._id;    // Lấy ObjectId của "Vivo"

    // Thêm sản phẩm với tham chiếu đến danh mục
    const products = [
      {
        productName: "iPhone 16",
        image: "iphone_16.jpg",
        size: "M",
        description: "iPhone mới với chip A15",
        quantity: 100,
        price: 12000000,
        categoryId: iphoneCategoryId  // Tham chiếu đến ObjectId của "Iphone"
      },
      {
        productName: "iPhone 16 Pro",
        image: "iphone_13_pro.jpg",
        size: "M",
        description: "iPhone với hệ thống camera ba ống kính",
        quantity: 100,
        price: 12600000,
        categoryId: iphoneCategoryId  // Tham chiếu đến ObjectId của "Iphone"
      },
      {
        productName: "iPhone 16 Pro Max",
        image: "samsung_s21.jpg",
        size: "M",
        description: "Điện thoại Samsung flagship với màn hình 120Hz",
        quantity: 100,
        price: 15000000,

        categoryId: samsungCategoryId  // Tham chiếu đến ObjectId của "Samsung"
      },
     
    ];

    // Thêm sản phẩm vào MongoDB
    await Product.insertMany(products);
    console.log("Sản phẩm đã được thêm.");
    res.status(200).send("Danh mục và sản phẩm đã được thêm thành công.");
  } catch (err) {
    console.error("Lỗi khi thêm danh mục hoặc sản phẩm:", err);
    res.status(500).send("Lỗi server.");
  }
});

const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
