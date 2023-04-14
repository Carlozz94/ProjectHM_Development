/**************************   DATA  ************************/
//Primero tenemos que obtener los elementos del documento HTML para trabajar con ellos
document.getElementById("btnSave").addEventListener("click", function(e){

    let name = document.getElementById("name");
    let price = document.getElementById("price");
    let stock = document.getElementById("stock");
    let description = document.getElementById("description");
    let color = document.getElementById("color");
    let size = document.getElementById("size");
    let category = document.getElementById("category");
    let image = document.getElementById("image");
    let fk_idCategoryClothe = document.getElementById("fk_idCategoryClothe");
    let fk_idAdmin = document.getElementById("fk_idAdmin");
    
    //Impresion en consola de estos datos a manera de test
    console.log(name.value);
    console.log(price.value);
    console.log(stock.value);
    console.log(description.value);
    console.log(color.value);
    console.log(size.value);
    console.log(category.value);
    console.log(image.value);
    console.log(fk_idCategoryClothe.value);
    console.log(fk_idAdmin.value);
    
    //Crear una constante llamada datos para guardar la informacion y pasarla como un cuerpo de solicitud cuando lo necesite (los campos deben coincidir como los tengo declarados en mi modelo (objeto de JAVA))
    
    const datos = {
        name: name.value,
        price: price.value,
        stock: stock.value,
        description: description.value,
        color: color.value,
        size: size.value,
        category: category.value,
        image: image.value,
        fk_idCategoryClothe:fk_idCategoryClothe.value,
        fk_idAdmin:fk_idAdmin.value,
    };
    
//Fetch a la URL de mi API (el RequestMapping del Controller)
    
fetch ("http://localhost:8080/wm/product/", { //hago la conexion a la URL
    
//Especifico el tipo de solicitud que manejare
method: "POST",
headers: {
    "Content-Type" : "application/json",
},
body: JSON.stringify(datos), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
})

.then((response) => response.text())
.then((data)=>{
    console.log("Producto guardado correctamente", data);
})
.catch((error)=>{
    console.log("No pudimos guardar el producto", error);
});
});