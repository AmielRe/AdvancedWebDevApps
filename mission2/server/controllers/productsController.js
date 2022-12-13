const Product = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ "error": err });
    }
}

const getProductByName = async (req, res) => {
    const prod = await Product.findOne({
        "name": req.params.name
    })
    res.status(200).json(prod);
}

module.exports = {
    getAllProducts,
    getProductByName
}