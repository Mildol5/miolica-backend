import mongoose, { Schema } from "mongoose";

// schema untuk validasi data products
export const productSchema = new Schema({
  product_id: {
    type: mongoose.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  seller_id: {
    type: Schema.Types.ObjectId,
    ref: "Sellers",
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Categorys",
  },
  productName: {
    type: String,
    required: true,
    maxLength: 20,
  },
  descriptionProduct: {
    type: String,
    default: "Penjual belum menuliskan deskripsi",
    maxLength: 50,
  },
  photoProduct: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    default: 0,
    min: 1,
    max: 9,
  },
  address: {
    type: String,
    maxLength: 50,
  },
  location: {
    type: String,
    required: true,
    maxLength: 50,
  },
  itemCategory: {
    category_id: {
      type: mongoose.ObjectId,
      default: new mongoose.Types.ObjectId(),
    },
    Category: {
      type: String,
      minLength: 3,
      maxLength: 15,
    },
    descriptionCategory: {
      type: String,
      maxLength: 50,
    },
    thumbnailPhoto: String,
  },
  QuantityProduct: {
    type: Number,
    default: 0,
    min: 1,
    max: 9,
  },
  storeName: {
    type: Schema.Types.ObjectId,
    ref: "Sellers",
  },
});
