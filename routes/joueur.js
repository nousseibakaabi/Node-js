const express = require('express')
const router = express.Router()
const joueurController = require('../controller/joueurController')



router.post('/newjoueur',joueurController.addJoueur);

router.get('/getalljoueur',joueurController.showJoueur)

router.get('/getjoueur/:id',joueurController.showById)

router.delete('/deletejoueur/:id',joueurController.deleteJoueur)

router.put('/delete/:id1/:id2',joueurController.attaque)

router.post('/newpartie/:id1/:id2',joueurController.addPartie);

router.get('/partie',(req,res) => {
    res.render("chat");
})


module.exports=router
