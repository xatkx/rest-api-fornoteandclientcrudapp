import mongoose, { Schema } from "mongoose";
export default mongoose.model('Clientes', new Schema({
    nombre: { type: String, trim: true},
    email: {type: String, trim:true},
    empresa: {type: String, trim: true},
    telefono: { type: String, trim: true}
}))

