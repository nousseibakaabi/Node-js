const express = require('express')
const http = require('http')
const mongo = require('mongoose')
const bodyparser = require('body-parser')
const db = require('./config/dbconnection.json')
const path = require('path')
const {addChat}=require('./controller/userController')
const {addPartieSocket , afficheSocket}=require('./controller/joueurController')

mongo
    .connect(db.url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

const userRouter = require('./routes/users')
const productRouter = require('./routes/products')
const joueurRouter = require('./routes/joueur')


const app=express()

app.set("views",path.join(__dirname,"views"))
app.set("view engine","twig")
app.use(express.json())
app.use(bodyparser.json())
app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/user',joueurRouter)


const server = http.createServer(
    app,
    console.log('server run')
)
const io = require('socket.io')(server)
io.on("connection",(socket) =>{
    console.log("Client connected")
    socket.emit("msg","Client connected")  
    
    
    socket.on("msgName",(data)=>{
        addChat(data)
        io.emit("msgName",data)
    })

    socket.on("partie",(data)=>{
        addPartieSocket(data)
        io.emit("partie",data)
    })

    socket.on("aff",(data)=>{
        const dataNew = afficheSocket(data)
        io.emit("aff",dataNew)
    })



    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",data)
    })


    socket.on("disconnect",()=>{
        console.log("Client disconnect")
        io.emit("msg","Client disconnect")  
    })


});
server.listen(3000)