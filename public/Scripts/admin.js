//1. verificar conexion con html
console.log("Holisss soy admin");

//funcion para obetener los datos de mi base de datos

const mostrarUsuarios = async () => {

    try {
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");

        const usuarios = await respuesta.json();
        console.log(usuarios);

        mostrarTabla(usuarios);
    } catch(error) {
        console.error("Error al obtener los usuarios", error);
    }
}
// funcion para crear una fila en tabla por cada usuar
function mostrarTabla(usuarios) {
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML = "";

    usuarios.forEach(usuario => {
        // por cada (forEach) usuario me va a crear una fila en la tabla
        tabla.innerHTML += ` 
    <tr>
                
                <td>${usuario.nombreCompleto}</td>
                <td>${usuario.correo}</td>
                <td>
                    <button type="button" class="btn btn-info" id="${usuario._id}" onclick="eliminarUsuario(event)">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
                            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                          </svg>  Eliminar</button>
                </td>
              </tr>
    
    `


    });

}
mostrarUsuarios();

//funcion para eliminar usuarios por  id
function eliminarUsuario(event){
console.log("Eliminar");

const idUsuarioEliminar = event.target.id;
console.log(idUsuarioEliminar);

fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}`,{method:"DELETE"}).then(
response => {
    if(!response.ok){
console.error("Error! no se pudo eliminar usuario");

    }else {
        alert("Usuario eliminado correctamente");
        mostrarUsuarios();
    }
}).catch(error => {
console.log("error al eliminar usuario", error);

})

}

