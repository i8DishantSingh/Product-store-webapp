import mongoose from "mongoose";
import Product  from "../models/product.model.js";


export const getProducts = async (req, res) => {
  
  try {
    const products = await Product.find({});
    res.status(201).json({ sucess: true, data: products});
    
  } catch (error) {
    console.error("Error in fetching products: ", error.message);
    res.status(500).json({ sucess: false, message: "server error" });
  }
};
export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ sucess: false, message: "please provide all the details" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ sucess: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating product: ", error.message);
    res.status(500).json({ sucess: false, message: "server error" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ sucess: false, message: "please provide a valid product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true});
    if (!updatedProduct) {
      return res.status(404).json({ sucess: false, message: "Product not found" });
    }
    res.status(200).json({ sucess: true, data: updatedProduct });
  } catch (error) {
    console.log("Error in updating the product: ", error.message);
    res.status(500).json({ success: false, message: "server error"});
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ sucess: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting the product: ", error.message);
    res.status(404).json({ sucess: false, message: "Product not found" });
  }
};