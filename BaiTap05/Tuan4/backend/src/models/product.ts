import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    image: { type: String },
    size: { type: String, enum: ['S', 'M', 'L', 'XL'], required: true },
    status: { type: Boolean, default: true },
    description: { type: String },
    quantity: { type: Number, default: 0 },
    price: {type: Number , default : 0},
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true } // Tham chiếu đến Category
  },
  { timestamps: true }
);

// Tạo virtual cho "id"
ProductSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Chỉ định cách hiển thị đối tượng trong JSON
ProductSchema.set("toJSON", {
  virtuals: true, // Hiển thị các virtuals
  versionKey: false, // Không hiển thị __v
  transform: (_doc, ret) => {
    // Bạn có thể thêm logic ở đây để tùy chỉnh
  }
});

export default mongoose.model("Product", ProductSchema);
