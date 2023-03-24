
//onclic="mostrar()"
//let boton = document.getElementById("buttoncar");
//boton.addEventListener("click",() => mostrar('hola55'));

   
function mostrar(mensaje){
    alert(mensaje);
}  
//crearAcciones()  onclick="mostrar()" onclick="mostrar()"

function guardarDatosCarrito(id){
    //manipulacion del DOM

    localStorage.id = id;
    //localStorage.precio = precio;
    //localStorage.descripcion = this.descripcion;
    document.getElementById("confirmacion").innerHTML = "";
    document.getElementById("confirmacion").innerHTML = "Agregado a su carrito: "+id; 

}

//desarrollo de funcion que obtiene informacion del local storage y lo muestra en la pagina por medio de etiquetas html
function getLocalStorage(id){
    let posicion =document.getElementById("datosLocalStorage")
    let datosAlmacenados = document.createElement("h2");
    datosAlmacenados.textContent = localStorage.getItem(id);

}
    
