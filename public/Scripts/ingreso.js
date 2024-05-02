//1. verificar conexion con html
console.log("Holis soy ingreso");

//crear mi funcion

const iniciarSesion = async () => {

    //obtener los valores ingresados por el usuario

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    console.log(correo, contrasena);

    try {
        //2. Realizar la peticion GET a nuestra BD
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        const usuarios = await respuesta.json();
        console.log(usuarios);

        //3. verificar si se encontro un usuario con el correo y la contraseña

        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

if(esUsuarioRegistrado){

// verificamos si es admin
const correoAdmin = "admin@gmail.com";
if(esUsuarioRegistrado.correo == correoAdmin){
alert("Hola Administrador!");
window.location.href = "./admin.html"

}else{
alert("Ingreso exitoso");
window.location.href = "./index.html"

}


}else{
alert("Correo o contraseña incorrectos, usuario no encontrado! vuelve a intentarlo o registrate");

}


    } catch (error) {
        console.error("Error al verificar inicio de sesion:", error);
    }



}