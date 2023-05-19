import User from "../models/user.js";
import Product from "../models/product.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {} from "dotenv/config";
import product from "../models/product.js";

const productController = {
  getOneProduct: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findOne({ _id: id });
      res.json({ message: "Product fetch success", data: product });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json({ message: "products fetch success", data: products });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  
  createProduct: async (req, res) => {
    try {
      const { name, model, price } = req.body;
      const ExistingProduct = await Product.findOne({ model });
      if (ExistingProduct)
        return res.status(400).json({
          message:
            "Sproduct exist already with same model number",
        });

      if (!name || !model || !price )
        return res.status(400).json({ msg: "Please fill in all fields." });

    

      const newProduct = new Product({
        name,
        model,
        price,
        
      });
      const account = await newProduct.save();
      if (account) {
        res.status(200).json(
          account
        );
      } else {
        return res.status(400).json({ msg: "Invalid product data" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, model, price ,isconfirmed} = req.body;

      await Product.findOneAndUpdate(
        { _id: id },
        { name, model, price ,isconfirmed} 
      );
      res.json({
        message: "Product update success",
        data:  { name, model, price,isconfirmed },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;

      await Product.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};



export default productController;
