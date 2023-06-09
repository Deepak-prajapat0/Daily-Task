const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    name:String,
    age:Number,
    graduationIn:String,
    skills:[String],
},{timestamps:true})

module.exports = mongoose.model("User",newSchema)