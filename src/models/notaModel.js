import mongoose, { Schema } from 'mongoose'
export default mongoose.model('Notas', new Schema({
    titulo:{ type: String, trin: true},
    mensaje: {type: String, trin: true}
}))