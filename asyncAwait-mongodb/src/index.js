const express = require("express");
const app= express();
const mongoose = require("mongoose");

mongoose.connect("")
.then(()=>console.log("MongoDb is connected ..."))
.catch((error)=>console.log("error",error))

app.listen(3000,()=>{
    console.log("App is running on port 3000")
})