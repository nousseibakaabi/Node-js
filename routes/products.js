const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const validate = require('../middle/validate')

router.post('/add',validate.validateProduct,productController.add);

router.get('/showproduct',productController.showProducts)

router.get('/showbyid/:id',productController.showById)

router.get('/showbyproductname/:username',productController.showByProductName)

router.get('/showmanyproductname/:username',productController.showManyByProductName)

router.put('/update/:id',validate.validateProduct,productController.update)

router.delete('/delete/:id',productController.deleteProduct)

module.exports=router
