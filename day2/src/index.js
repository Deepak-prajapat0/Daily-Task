const express= require('express');
const app= express();

app.use(express.json())

const users=[]

app.post('/api/users',(req,res)=>{
    let name = req.body.name;
    let user = {
        id:users.length+1,
        name
    }
    users.push(user)
    return res.status(201).send({msg:"hlo from get api",users})
})
app.get('/api/users',(req,res)=>{
    if(req.query.name){
        let name = req.query.name;
    let user = users.find(x=> x.name === name)
    if(!user) return res.status(404).send({msg:"Not found"})
    res.status(200).send({msg:"hlo from get api",user})
    }
    else{
    res.status(200).send({msg:"hlo from get api",users})
    }
})
app.get('/api/users/:id',(req,res)=>{
    let user = users.find(x=> x.id === parseInt(req.params.id))
    if(!user) return res.status(404).send({msg:"Not found"})
    res.status(200).send({msg:"user found",user})
})

app.put('/api/users/:id',(req,res)=>{

    let id= req.params.id;
    let name = req.body.name;
    let user = users.findIndex(x=> x.id === parseInt(id))
    if(!user) return res.status(404).send({msg:"Not found"})

    users[user].name = name;

    res.status(200).send({msg:"Data updated",user: users[user]})
})

app.delete('/api/users/:id',(req,res)=>{
    let id= req.params.id;
    let user = users.findIndex(x=> x.id === parseInt(id))
    if(!user) return res.status(404).send({msg:"Not found"})

    users.splice(user,1)

    return res.send({msg:"deleted"})
})
let port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log(port)
})

