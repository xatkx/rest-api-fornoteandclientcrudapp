import { Router } from "express"; // router
//  cotrollers note
import { getAllNote, getOneNote } from "./controllers/note/getControllers.js";
import { addOneNote } from './controllers/note/addControllers.js'
import { putOneNote } from "./controllers/note/updateControllers.js";
import { deleteOneNota } from "./controllers/note/deleteControllers.js";

// client controllers

const router = Router() 

// init
router.get('/', (req, res) => {
    res.send(`<a href='/notas'>Nota api</a> or <a href='/client' >Client api</a>`)
})
// notes  route
router.get('/notas', getAllNote)
router.get('/notas/:id', getOneNote)
router.post('/notas', addOneNote)
router.put('/notas/:id', putOneNote)
router.delete('/notas/:id', deleteOneNota)
// cliente route
export default router