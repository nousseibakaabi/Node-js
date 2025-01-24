const mongo = require('mongoose')
const Schema = mongo.Schema
const Product = new Schema({
    name : String,
    description : String,
    prix : Number,
    status : Boolean,
})

module.exports=mongo.model('product',Product)//(nom dans BD, nom entite)