// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/configdb.ts';
import authRoutes from './route/authRoutes.ts';
import protectedRoutes from './route/protectedRoute.ts';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

// Tạo __dirname (vì dùng ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();   // ✅ phải tạo app trước

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'users'));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/', protectedRoutes);
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
