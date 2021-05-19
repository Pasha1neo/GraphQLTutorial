import mongoose from 'mongoose'
const {model, Schema} = mongoose

const MovieSchema = new Schema({
    name: String,
    genre: String,
    directorId: String,
    rate: Number,
    watched: Boolean,
})
export default model('movie', MovieSchema)
