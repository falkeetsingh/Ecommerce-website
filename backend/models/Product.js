const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide a product title"]
    },
    status:{
        type: String,
        required: ["New", "Sales"],
        default: "New",
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
    },
    currentPrice: {
        type: Number
    },
    image: {
        type: String,
        required: [true, "Please provide an image of the product"]
    },
    category: {
        type: String,
        required: [true, 'Please provide a category']
    },
    productType: {
        type: String,
        enum: ['all', 'newest', 'trending', 'best_seller', 'featured'],
        default: 'all'
    }
},{
    timestamps: true
});


module.exports = mongoose.model('Product',productSchema);
