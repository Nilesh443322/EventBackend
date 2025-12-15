import mongoose from 'mongoose'
const patient=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String, 
    contact:Number,
    adhar:Number,
    fees:Number,
   disease:String,
   madicine:String
   
});
const patien = mongoose.model("patient124",patient)
export default patien