const express = require('express');
const Joi = require('joi')

const app = express();

app.use(express.json());
// app.set('view engine',"pug");
// app.set('views',"./")


app.post('/',(req,res)=>{
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),  
        birth_year: Joi.number()
            .integer()
            .min(1900)
            .max(2013),
    
    })
        .valid('username', 'birth_year')

        const valid = schema.validate({username:req.body.name,birth_year:req.body.birth})
        return res.send(valid.error.details[0].message)
    })

app.listen(3000)