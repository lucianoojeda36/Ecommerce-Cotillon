import mongoose from 'mongoose';
const {Schema,model} = mongoose
const Products = mongoose.model('Products')


const CategoriesSchema = new Schema({
title: String,
products:[{type: Schema.Types.ObjectId,ref:'Products'}]
})


const Categories = model('Categories',CategoriesSchema)

export default Categories