import { Router } from "express"; // router
//  cotrollers note
import { getAllNote, getOneNote } from "./controllers/note/getControllers.js";
import { addOneNote } from './controllers/note/addControllers.js'
import { putOneNote } from "./controllers/note/updateControllers.js";
import { deleteOneNota } from "./controllers/note/deleteControllers.js";

// client controllers
import { getAllClient } from "./controllers/cliente/getControllers.js";
import { addOneClient } from './controllers/cliente/addcibtrillers.js';
import { deleteOneCliente } from "./controllers/cliente/deleteControllers.js";
import { updateOneClient } from './controllers/cliente/updateControllers.js'

const router = Router() 

// init
router.get('/', (req, res) => {
    res.send(`<a href='/notas'>Nota api</a> or <a href='/clientes' >Client api</a>`)
})
// notes  route
router.get('/notas', getAllNote)
router.get('/notas/:id', getOneNote)
router.post('/notas', addOneNote)
router.put('/notas/:id', putOneNote)
router.delete('/notas/:id', deleteOneNota)
// cliente route

router.get('/clientes', getAllClient)
router.post('/clientes', addOneClient)
router.delete('/clientes/:id', deleteOneCliente)
router.put('/clientes/:id', updateOneClient)
export default router