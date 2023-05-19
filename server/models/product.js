import mongoose from "mongoose";
const {Schema, model} = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    isconfirmed: {
      type: Boolean,
      default: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", productSchema);
