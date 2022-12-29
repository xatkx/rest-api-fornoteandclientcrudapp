
import Express, { urlencoded} from "express";
import router from "./router.js"; // rutas
import mongoose from "mongoose";
import cors from 'cors'
//import * as dotenv from 'dotenv'
//dotenv.config()

//import dbMongo from "./config/db.js";

const app = Express()
// var
const port = process.env.PORT || 2020;

// middle were
app.use(cors())
app.use(urlencoded({extended: true}))

// router
app.use(router)
// listenirn

app.listen(port,() => {
console.log('listenig in port:',port)
mongoose.connect(process.env.DB_URL)

})
