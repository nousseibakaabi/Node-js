const yup = require('yup')

async function validateUser(req,res,next){
    try {
        const Schema = yup.object().shape({
            username: yup.string()
            .matches(/^[A-Z][a-z]/, "Le nom d'utilisateur doit commencer par une lettre majuscule")
            .required(),
            email: yup.string().email().required()
            .matches(/^@esprit\.tn$/, "L'email doit se terminer par @esprit.tn"),
            cin: yup.number().required(),
        })
        await Schema.validate(req.body);
        next();
        return res.status(200).send('validate')
    }catch(err){
        //console.log(err);
        //return res.status(400).json(err)
        return res.status(400).json({message:err.message});
    } 
}

async function validateProduct(req,res,next){
    try {
        const Schema = yup.object().shape({
            name: yup.string().required(),
            description: yup.string().required(),
            prix: yup.number().required(),
            status : yup.boolean().required().oneOf([true], "Le statut doit être true."),
        })
        await Schema.validate(req.body);
        next();
        return res.status(200).send('validate')
    }catch(err){
        //console.log(err);
        //return res.status(400).json(err)
        return res.status(400).json({message:err.message});
    } 
}

module.exports={validateUser,validateProduct};