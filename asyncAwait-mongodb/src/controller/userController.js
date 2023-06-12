const userSchema = require('../models/model')

const createUser = async(req,res)=>{
    try {
        let {name,age,graduationIn,skills} =req.body;
        if(Object.keys(req.body).length === 0){
            return res.status(400).send({status:false,msg:"Enter all details"})
        }
        if(name.length < 3){
            return res.status(400).send({status:false,msg:"Name length should be min of 3"})
        }
        if(age < 18){
            return res.status(400).send({status:false,msg:"Min required age is 18"})
        }
        if(graduationIn.length < 2){
            return res.status(400).send({status:false,msg:"Please enter a valid Degree name"})
        }
        if(skills.length < 3){
            return res.status(400).send({status:false,msg:`Please enter ${3-skills.length} more skills `})
        }
        let user = await userSchema.create(req.body);
        return res.status(201).send({status:true,msg:"User created sucessfully",user})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={createUser}