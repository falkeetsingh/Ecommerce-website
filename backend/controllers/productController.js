const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public

const getProducts = async (req,res)=>{
    try{
        const {type} = req.query;
        const query = type?{producType: type}:{};

        const products = await Product.find(query);
        res.json(products);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
            res.status(404).json({message: 'product not found'});
        }
    }catch(error){
        res.status(400).json({message: error.message});
    }
}


module.exports = {
    getProducts,
    getProduct
};