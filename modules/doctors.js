import mongoose from 'mongoose'
const doctor=new mongoose.Schema({
    name:String,
    spac:String,
    gender:String, 
    contact:Number,
    email:String,
    coal:String,
    fees:Number,
   disease:String,
   listdisease:String
   
 
});
const docto = mongoose.model("doctor124",doctor)
export default docto