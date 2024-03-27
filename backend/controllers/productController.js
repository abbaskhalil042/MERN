const Product = require("../models/productModels");

//*create product - admin

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};


//*get all product
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ 
    success:true,
    products
   }); //29:00:00
};


//* update product - ADMIN
// const Product = require('../models/Product');

exports.updateProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body,{new:true});

      if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

        const updatedProduct = await Product.findById(id);

    // Respond with the updated product
    res.status(200).json({
      success: true,
      product: updatedProduct
    });
  } catch (error) {
    // Handle errors
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message:error.message
    });
  }
};

