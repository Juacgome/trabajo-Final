//1. verificar conexion con html
console.log("hola soy registro");

const formulario = document.getElementById("formulario")
console.log(formulario)
formulario.addEventListener ("submit", e => {

    e.preventDefault()
verificarUsuario()

})
    const verificarUsuario = async () => {
   
   //2.1 obtener los datos de mi formulario
           const nombreCompleto = document.getElementById("nombre").value;
       const correo = document.getElementById("correo").value;
       const contrasena = document.getElementById("contrasena").value;
   
       console.log(nombreCompleto, correo, contrasena);
   
        //2.2. crear un objeto con los datos del usuario
   
       const datosUsuario = {
           nombreCompleto,
           correo,
           contrasena
       
       }
       console.log(datosUsuario)
    
       //2.3. hacer la peticion post para crear usuario en nuestra base de datos
   
   try {
       const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
           {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(datosUsuario)
   
           
           }
       );
   
       const nuevoUsuario = await respuesta.json();
   console.log("usuario creado exitosamente", nuevoUsuario);
    
   // condicional para redireccionar a ingreso.html
   if(nuevoUsuario){
   
   alert("Registro exitoso");
   window.location.href = "./ingreso.html"
   
   
   }else{
   alert("Ups! error de registro, intentelo de nuevo");
   
   }
   
   
   }catch(error){
 
       //2. crear mi funcion para registro
            
          
       console.error("Error al registrar usuario", error);

   }
        
    }

