const Joueur = require('../models/joueur')
const Partie = require('../models/partie')





async function addJoueur (req,res){
    try {
        //console.log("body" + req.body);
        const joueur = new Joueur({
            pseudo:req.body.pseudo,
            sante:100,
            score:0
        });
        await joueur.save();
        res.status(200).json(joueur)
    } catch (err) {
        console.log(err)
   }}

   async function showJoueur (req,res){
    try {
        const joueur = await Joueur.find();
        res.status(200).json(joueur)
    } catch (err) {
        console.log(err)
   }
}


async function showById (req,res){
    try {
        const joueur = await Joueur.findById(req.params.id);
        res.status(200).json(joueur)
    } catch (err) {
        console.log(err)
   }
}



async function deleteJoueur (req,res){
    try {
        const joueur = await Joueur.findByIdAndDelete(req.params.id,{new : true});
        res.status(200).json(joueur)
    } catch (err) {
     
        console.log(err)
   }
}

async function attaque (req,res){
    try{
        const j1 = await Joueur.findById(req.params.id1);
        const j2 = await Joueur.findById(req.params.id2);
        score1=j1.score+10;
        sante1=j2.score-20;

        const j1u=await Joueur.findByIdAndUpdate(req.params.id1,{score:score1},{new:true})
        const j2u=await Joueur.findByIdAndUpdate(req.params.id2,{sante:sante1},{new:true})

        res.status(200).json(j1u+"new result "+j2u)

    }catch{
        console.log(err)

    }
}



async function addPartie (req,res){
    try {
        //console.log("body" + req.body);
        const partie = new Partie({
            nom:req.body.nom,
            joueur_1:req.params.id1,
            joueur_2:req.params.id2,
            etat:"en cours"
        });
        await partie.save();
        res.status(200).json(partie)
    } catch (err) {
        console.log(err)
   }}


   async function addPartieSocket (data){
    try {
        //console.log("body" + req.body);
        const partie = new Partie({
            nom:data.nompartie,
            joueur_1:data.joueur1,
            joueur_2:data.joueur2,
            etat:"en cours"
        });
        await partie.save();
        res.status(200).json(partie)
    } catch (err) {
        console.log(err)
   }}




async function afficheSocket(data){
    try{
        const j1 = await Joueur.findById(data.joueur1)
        const j2 = await Joueur.findById(data.joueur2)

        

    }catch (err){
        console.log(err)
    }
}

module.exports={addJoueur,showJoueur,showById,deleteJoueur,attaque,addPartie,addPartieSocket,afficheSocket}
