//Primero tenemos que obtener los elementos del documento HTML para trabajar con ellos

document.getElementById("btnSend").addEventListener("click", function(e){

    let nombrePlatillo = document.getElementById("nombrePlatillo");
    let descripcionPlatillo = document.getElementById("descripcion");
    let imagenPlatillo = document.getElementById("urlImagen");
    let precioPlatillo = document.getElementById("precio");
    
    //Impresion en consola de estos datos a manera de test
    console.log(nombrePlatillo.value);
    console.log(descripcionPlatillo.value);
    console.log(imagenPlatillo.value);
    console.log(precioPlatillo.value);
    
    
    //Crear una constante llamada datos para guardar la informacion y pasarla como un cuerpo de solicitud cuando lo necesite (los campos deben coincidir como los tengo declarados en mi modelo (objeto de JAVA))
    
    const datos = {
        nombre: nombrePlatillo.value,
        descripcion: descripcionPlatillo.value,
        url_imagen: imagenPlatillo.value,
        precio: precioPlatillo.value,
    };
    
    //Fetch a la URL de mi API (el RequestMapping del Controller)
    
    fetch ("http://localhost:8080/restaurante/platillos/", { //hago la conexion a la URL
    
    //Especifico el tipo de solicitud que manejare
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(datos), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
    })
    
    .then((response) => response.text())
    .then((data)=>{
        console.log("Platillo guardado correctamente", data);
    })
    .catch((error)=>{
        console.log("No pudimos guardar el platillo", error);
    });
    });