import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    listProduct: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Tham chiếu đến Product
  },
  { timestamps: true }
);

// Tạo virtual cho "id"
CategorySchema.virtual("id").get(function () {
  return this._id.toString();
});

// Chỉ định cách hiển thị đối tượng trong JSON
CategorySchema.set("toJSON", {
  virtuals: true, // Hiển thị các virtuals
  versionKey: false, // Không hiển thị __v
  transform: (_doc, ret) => {
    // Bạn có thể thêm logic ở đây để tùy chỉnh
  }
});

export default mongoose.model("Category", CategorySchema);
