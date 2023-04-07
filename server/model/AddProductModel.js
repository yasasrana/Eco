//Products

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({

    PId: {
        type: String,
    },

    ProductBrand: {
        type: String,
    },

    ProductModel: {
        type: String,

    },

    ProductType: {
        type: String,
    },

    FuelType: {
        type: String,
    },

    Transmission: {
        type: String,
    },

    Features: {
        type: String,
    }

})


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;