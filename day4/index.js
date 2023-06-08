const express = require('express');
const Joi = require('joi')

const app = express();

app.use(express.json());
// app.set('view engine',"pug");
// app.set('views',"./")
let users=[]


app.post('/',(req,res)=>{
    const schema = Joi.object()
    .keys({
      name: Joi.string()
        .min(3)
        .max(10)
        .required(),
      age: Joi.number()
        .integer()
        .min(16)
        .required()
    })
  const data = {
    name: req.body.name,
    age: req.body.age
  };
  
  const result = schema.validate(data);
  if(result.error){
      return res.status(400).send(result.error.details[0].message)
  }
  else{
    users.push(data)
        return res.status(201).send({msg:"No error found",data:users})
  }
    })

app.listen(3000)