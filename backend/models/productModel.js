const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    image:[
        {
            image:String,
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
})

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;