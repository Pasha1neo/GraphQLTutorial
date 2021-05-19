import mongoose from 'mongoose'
const {model, Schema} = mongoose

const DirectorShema = new Schema({
    name: String,
    age: Number,
})
export default model('director', DirectorShema)
