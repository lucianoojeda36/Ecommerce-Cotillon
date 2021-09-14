import mongoose from 'mongoose';
const {Schema,model} = mongoose


const ProductSchema = new Schema({
_id: String,
name: String,
description: String,
price: Number,
stock: Number,
image: String,
}, { _id: false })


const Products = model('Products',ProductSchema)

export default Products