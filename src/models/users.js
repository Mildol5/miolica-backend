import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const { Schema } = mongoose;

// schema untuk validasi data users
export const usersSchema = new Schema({
  users_id: {
    type: mongoose.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  username: {
    type: String,
    required: [true, "Username required, please input a username"],
    minLength: [3, "Username cannot be less than 3 characters"],
    maxLength: [20, "Username cannot be longer than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email required, please input a email"],
    maxLength: [30, "Email cannot be longer than 30 characters"],
    unique: true,
    validate: [isEmail, "Email not valid, please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password required, please input a password"],
    minLength: [8, "Password cannot be less than 8 characters"],
    maxLength: [20, "Password cannot be longer than 20 characters"],
  },
  name: {
    type: String,
    required: [true, "Name required, please input a name"],
    minLength: [3, "Name cannot be less than 3 characters"],
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  address: {
    type: String,
    required: [true, "Address required, please input a address"],
    maxLength: [20, "Address cannot be longer than 50 characters"],
  },
  wishlist: [
    {
      wishlist_id: {
        type: mongoose.ObjectId,
        default: new mongoose.Types.ObjectId(),
      },
      productName: {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
      descriptionProduct: {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
      unitPrice: {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
    },
  ],
  cart: [
    {
      cart_id: {
        type: mongoose.ObjectId,
        default: new mongoose.Types.ObjectId(),
      },
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
      quantity: {
        type: Number,
        required: [true, "Please input the product quantity"],
        max: [3, "quantity exceeds the maximum limit"],
        default: 0,
      },
      totalPrice: {
        type: Number,
        required: true,
        max: [9, "the total price exceeds the maximum transaction limit"],
      },
    },
  ],
  photoProfile: String,
  saldo: {
    type: Number,
    min: 1,
    max: [15, "the balance is already maximum, it can't be more than this"],
  },
});
