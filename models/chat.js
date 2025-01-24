const mongo = require('mongoose')
const Schema = mongo.Schema
const Chat = new Schema({
    msg : String,
    dateMsg : {type : Date, default : Date.now}
 
})

module.exports=mongo.model('chat',Chat)