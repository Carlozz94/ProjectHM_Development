const registrarse = document.querySelector("#registroUsuarios");

registrarse.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  //const telefono = document.querySelector("#telefono").value;
  const email = document.querySelector("#email").value;
  const contrasena = document.querySelector("#contrasena").value;

  const datosCustomer = {
    firstName: nombre,
    lastName: apellido,
    email: email,
    password: contrasena
  };
  //Fetch a la URL de mi API (el requestMappin del contorller)
  fetch("https://projecthmdevelopmentback-production.up.railway.app/wm/customer/",{ //<--hago la conexion a la URL
      //especifico el tipo de solicitud que manejare
      method: "POST",
      headers: {
         "Content-Type" : "application/json",
      },
      body: JSON.stringify(datosCustomer), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
      })
  
      .then((response) => response.text())
      
      .then((data)=>{
          console.log("Datos guardados correctamente", data);
          console.log(typeof(data));
          console.log(data);
          console.log(JSON.parse(data));
          let datos = JSON.parse(data);
          console.log(datos.status);
          console.log(datos.length);
          console.log(typeof(datos.status));
          if(datos.status=='500'){
            //alert("El correo ya esta registrado")
           toastr.error("El correo ya esta registrado");
          }
          /*else if(data==''){
            window.location.href = "./iniciarSesion.html";
          }*/
      })
      .catch((error)=>{
      console.log("No pudimos guardar los datos", error);
      //alert("hubo un error al guardar los datos");
      window.location.href = "./iniciarSesion.html";
      });
  
  
  
  /*    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
 
  const estaRegistrado = usuarios.find((usuarios) => usuarios.email === email);

  if (estaRegistrado) {
    return alert("el usuario ya esta registrado");
  }

  usuarios.push({
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    contrasena: contrasena,
  });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("se registro correctamente");
  window.location.href = "./iniciarSesion.html";
  */

});
//*********codigo felipe**///
/*
document.getElementById("btnSend").addEventListener("click", function(e){

  //Primero tenermos que obtener los elementos del documento HTML para trabajar con ellos
  
  let nombrePlatillo = document.getElementById("nombrePlatillo");
  let descripcionPlatillo = document.getElementById("descripcion");
  let imagenPlatillo = document.getElementById("imagen");
  let precioPlatillo = document.getElementById("precio");
  
  
  let botonEnviarInfo = document.getElementById("btnSend");
  
  //impresion en consola de estos datos a manera de test
  console.log(nombrePlatillo.value);
  console.log(descripcionPlatillo.value);
  console.log(imagenPlatillo.value);
  console.log(precioPlatillo.value);
  
  //crear una constante llamada datos para guardar la informacion y pasarla como un cuerpo de solicitud cuando
  //lo necesite (los campos debden coincidir como los tengo declarados en mi modelo (objeto JAVA)
  
  const datosPlatillo = {
      nombre: nombrePlatillo.value,
      descripcion: descripcionPlatillo.value,
      url_imagen: imagenPlatillo.value,
      precio: precioPlatillo.value
  };
  
  //Fetch a la URL de mi API (el requestMappin del contorller)
  fetch("http://localhost:8080/restaurante/platillos/",{ //<--hago la conexion a la URL
      //especifico el tipo de solicitud que manejare
      method: "POST",
      headers: {
         "Content-Type" : "application/json",
      },
      body: JSON.stringify(datosPlatillo), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
      })
  
      .then((response) => response.text())
      
      .then((data)=>{
          console.log("Platillo guardado correctamente", data);
      })
      .catch((error)=>{
      console.log("No pudimos guardar el platillo", error);
      });
    
  });
  */
