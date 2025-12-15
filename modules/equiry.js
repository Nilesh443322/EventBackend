import mongoose from 'mongoose'
const enquiry=new mongoose.Schema({
    name:String, 
    contact:Number,
    email:String,
    address:String,
    msg:String
   
   
});
const enqu = mongoose.model("enquiry124",enquiry)
export default enqu