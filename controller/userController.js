const User = require('../models/user')
const Chat = require('../models/chat')



async function addChat (data){
    try {
        const chat = new Chat({msg:data.msg});
        await chat.save();
    } catch (err) {
        console.log(err)
   }}


   function show(req,res){
    res.send('salut projet-crud')
}

function add1(req,res){
    new User({
        username : req.params.username,
        email : req.params.email,
        cin : req.params.cin
    }).save()
    res.send("good added")
}

async function add (req,res){
    try {
        //console.log("body" + req.body);
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
   }}

   async function showUsers (req,res){
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
   }
}

async function showById (req,res){
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
   }
}

async function showByUserName (req,res){
    try {
        //const {username} = req.params.username;
        const user = await User.findOne({username:req.params.username});
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
   }
}

async function showManyByUserName (req,res){
    try {
        //const {username} = req.params.username;
        const user = await User.find({username:req.params.username});
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
   }
}

async function update (req,res){
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true});
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
   }
}

async function deleteUser (req,res){
    try {
        const user = await User.findByIdAndDelete(req.params.id,{new : true});
        res.status(200).json(user)
    } catch (err) {
     
        console.log(err)
   }
}

module.exports={show,add1,add,showUsers,showById,showByUserName,showManyByUserName,update,deleteUser,addChat}
