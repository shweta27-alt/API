const express = require("express");
const mongoose = require("mongoose");
const app = express();

const productSchema = new mongoose.Schema({
    name: String,
    description:String,
    price:Number,
})

const Product = new mongoose.model("product", productSchema)

app.post("/api/v1/product/new",async(req,res) => {

    
const product = await Product.create(req.body);

res.status(200).json({
    success: true,
    product
})
}) 