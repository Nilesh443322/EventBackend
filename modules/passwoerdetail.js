import mongoose from 'mongoose'
const pas=new mongoose.Schema({
    adhar:Number,
    password:Number,
    count:Number
});
const passe= mongoose.model("password121",pas)
export default passe