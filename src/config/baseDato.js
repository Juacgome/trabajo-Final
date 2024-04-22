// importamos las dependencias que necesitamos.
import mongoose from "mongoose";
// crear una funcion que nos conecta la base de datos

const conexionMongo = async() => {

    await mongoose.connect(process.env.BD_URL,{})

    // control de errores con try - Catch
    try{
        console.log("conexion exitosa");
    } catch(error){
        console.log("error de conexion:", error.message);
    }
    
}

// tenemos que exportar nuetsra funcion para llamarla desde nuestro servidpr
export default conexionMongo;
