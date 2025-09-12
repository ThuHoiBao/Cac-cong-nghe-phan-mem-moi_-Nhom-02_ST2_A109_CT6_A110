import mongoose from "mongoose";
import User from "./user.ts";
import Product from "./product.ts";
import Category from "./category.ts";

const db = {};

db.mongoose = mongoose;
db.User = User;
db.Product = Product;
db.Category = Category;

export default db;
