// importamos dependencias -> lo que necesitemos para el funcionamiento del codigo



/*
-> PETICIONES
GET -> mr muestra mis usuarios
POST -> crear usuarios
PU -> Me modifica mis usuario
DELETE -> Me elimina mis usuarios

*/


//importamos dependencias -> lo que necesitemos para el funcionamiento del código

import { json } from 'express';
import usuarioModel from '../models/usuario.model.js';


/*
    ->PETICIONES
    GET -> me muestra mis usuarios
    POST -> crear usuarios
    PUT -> Me modifica mis usuarios
    DELETE -> Me elimina mis usuarios
*/


//Prueba inicial
 
//LÓGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    
    // manejo de errores con try y catch

try{
let usuarios = await usuarioModel.find();
return res.send(usuarios);
}catch(error){
return res.json({error: "error al mostrar los datos" + error});
}

}

//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
   // manejo de errores con try catch
   try{
let datosUsuario = req.body;
let nuevoUsuario = await usuarioModel.create(datosUsuario);
return res.json(nuevoUsuario);

   }catch(error){
return res.json({error: "error al crear el usuario", message:error.message})

   }
}

//LÓGICA PARA MODIFICAR USUARIOS por id
export const putUsuario = async(req, res) => {
    
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id;
        await usuarioModel.findByIdAndUpdate(idModificar.datosModificar);
        return res.json({message:"usuario actualizado correctamente"});


    }catch(error){
        return res.json({error: "error al modificar el usuario", message:error.message});

    }
}

//LÓGICA PARA ELIMINAR USUARIOS por id

export const deleteUsuario = async(req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        } else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar usuario", message:error.message});
    }
}