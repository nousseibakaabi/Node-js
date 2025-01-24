const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validate = require('../middle/validate')


router.get('/show',userController.show)

router.get('/add/:username/:email/:cin',userController.add1)

router.post('/add',validate.validateUser,userController.add);

router.get('/showusers',userController.showUsers)

router.get('/showbyid/:id',userController.showById)

router.get('/showbyusername/:username',userController.showByUserName)


router.get('/showmanyusername/:username',userController.showManyByUserName)

router.put('/update/:id',validate.validateUser,userController.update)

router.delete('/delete/:id',userController.deleteUser)

router.get('/chat',(req,res) => {
    res.render("chat");
})

module.exports=router
