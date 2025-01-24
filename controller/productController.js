const Product = require('../models/product')


async function add (req,res){
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
   }}

   async function showProducts (req,res){
    try {
        const product = await Product.find();
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
   }
}

async function showById (req,res){
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
   }
}

async function showByProductName (req,res){
    try {
        const product = await Product.findOne({productName:req.params.productName});
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
   }
}

async function showManyByProductName (req,res){
    try {
        const product = await Product.find({productName:req.params.productName});
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
   }
}

async function update (req,res){
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new : true});
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
   }
}

async function deleteProduct (req,res){
    try {
        const product = await Product.findByIdAndDelete(req.params.id,{new : true});
        res.status(200).json(product)
    } catch (err) {
     
        console.log(err)
   }
}

module.exports={add,showProducts,showById,showByProductName,showManyByProductName,update,deleteProduct}
