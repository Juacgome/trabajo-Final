// importar las ondependencias que necesitamos usar
import mongoose from "mongoose";

const schema = mongoose.Schema;


// ahora nos creamos nuestyro esquema de datos que es lo que vamos a guardar en nuestra base de datos

const usuarioSchema = new schema({
    nombreCompleto: {
        type: String,
        required: true

    },
    Correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true

    }
});

// yo quiero enviar la plantilla (schema) a nuestra base de datos
// crear nuestro modelo

const usuarioModel = mongoose.model('usuario', usuarioSchema);

//exportamos nuestro modelo
export default usuarioModel;


