// Aquí se debe cambiar el URL del servicio en el BackEnd

let usuario = document.getElementById('email');
let contrasena = document.getElementById('contrasena');
let usuariodato = usuario.value;
let datos="cambiando informacion";
const URL_MAIN ='https://projecthmdevelopmentback-production.up.railway.app/wm/customer/'; //URL a donde se hace la petición


//let datos;

    /*fetch(URL_MAIN, {
        method: 'get' //tipo de método
    }).then(function(response) {//response es la respuesta del servidor
        response.json()
        .then(function (json) { //json es el objeto que se obtiene del servicio
        datos = json;
            console.log(json); //imprime el json
        console.log(json.length); //imprime el tamaño del json
        console.log("estos son los datos recolectados",datos);
        //productos=json; //se guarda el json en la variable productos
        //Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
})});
*/

    /*fetch(URL_MAIN)
    //`URL_MAIN`
    //la linea anterior es para realizar la peticion a la url, agregarmos la plantilla literal 
    //y esto nos ayudara a ir variando el elemento final de mi ruta (end point)

    .then(usuarios=> usuarios.json())
    //cuanfo la promesa se resuelva, asignamos la info a la variable infoPokemon en un formato json

    .then((data)=>{
    /*
    esta promesa se resuelve con la informacion ya guardada previamente y 
    esta informacion se pasara como un parametro de una funcion adicional llamada crearPokemon
    */
    //comprobarUsuario2(data);

//})

/*function comprobarUsuario2(data){
    let correo = data[0].email;
    let password = data[0].password;
    console.log("imprimiendo correo: ",correo);
    console.log("imprimiendo password: ",password);
    console.log("longi",data.length);


}*/

const iniciar = document.querySelector("#inicio");

iniciar.addEventListener("submit", (e) => {
  e.preventDefault();
    
  const email = document.querySelector("#email").value;
  const contrasena = document.querySelector("#contrasena").value;

  fetch(URL_MAIN)
    //`URL_MAIN`
    //la linea anterior es para realizar la peticion a la url, agregarmos la plantilla literal 
    //y esto nos ayudara a ir variando el elemento final de mi ruta (end point)

    .then(usuarios=> usuarios.json())
    //cuanfo la promesa se resuelva, asignamos la info a la variable infoPokemon en un formato json

    .then((data)=>{
    /*
    esta promesa se resuelve con la informacion ya guardada previamente y 
    esta informacion se pasara como un parametro de una funcion adicional llamada crearPokemon
    */
   console.log("longitud fecht",data.length);

    comprobarUsuario1(data,email,contrasena);

})
  //const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  //const valido = usuarios.find(
    //(usuarios) => usuarios.email === email && usuarios.contrasena == contrasena
  //);

  /*if (!valido) {
    return toastr.error("Datos incorrectos");
  }
  //jesus indica que se omita por ahora lo siguiente
  //alert("Bienvenido");

  window.location.href = "./perfil.html";
  */


  
});

function comprobarUsuario1(pData,pEmail,pContrasena){
    //console.log("longitudcomprobarantes",pData.length);
    console.log("longitudpEmail",pEmail);
    console.log("longitudpContrase",pContrasena);
    //console.log("longitudcomprobarantesdata",pData[0].email);
    
    for(let i=0;i<pData.length;i++){
        console.log("longitudfor",pData.length);
        console.log("numero de checadas: ",i);
        console.log((pData.length-1)==i);
        if(pData[i].email==pEmail && pData[i].password==pContrasena){
            
            //console.log("son correos iguales for");
            const idC = pData[i].idCustomer;
            //localStorage.clear(usuarioIniciado);
            const usuarioIniciado = JSON.parse(localStorage.getItem("usuarioIniciado")) || [];

            usuarioIniciado.push({
                Nombre: pData[i].firstName,
                Apellido: pData[i].lastName,
                Email: pData[i].email
                
              });
              localStorage.setItem("usuarioIniciado", JSON.stringify(usuarioIniciado));

            window.location.href = "./perfil.html";
            break;

        }else if((pData.length-1)==i){
            //console.log("no son iguales for");
            //alert("datos incorrectos")
            return toastr.error("usuario o contrasena erroneos");
        }
        //if((pData.length-1)==i)
       


    /*if (!valido) {
        return toastr.error("Datos incorrectos");
      }
      //jesus indica que se omita por ahora lo siguiente
      //alert("Bienvenido");
    
      window.location.href = "./perfil.html";*/
    }//cierre de for

//retunr 

}//cierre de funcion
//console.log("otro dato",datos);