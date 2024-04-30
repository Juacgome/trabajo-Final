//Importamos dependencias
// Rutas nos conectan front(esta en el servidor)  con logica

import express from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuario.controller.js';

//definir una variable para nuestras rutas
const usuarioRouter = express.Router();


//definimos nuestras rutas especificas
usuarioRouter.get('/obtenerUsuario' ,getUsuario);

//Ruta para crear crear usuarios
usuarioRouter.post('/crearUsuario',postUsuario);

//Ruta para modificar usuarios por su id -> identificador unico

usuarioRouter.put('/modificarUsuario/:_id', putUsuario);

//Ruta para eliminar  usuariospor su id
usuarioRouter.delete('/eliminarUsuario/:_id',deleteUsuario);

//exportamos las rutas
export default usuarioRouter;





