import mongoose from 'mongoose'
const passa=new mongoose.Schema({
    name:String,
    password:Number,
    count:Number
});
const pas= mongoose.model("mypass",passa)
export default pas