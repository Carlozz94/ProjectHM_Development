/***********************   DATA  **********************/
//Primero tenemos que obtener los elementos del documento HTML para trabajar con ellos

console.log("Entre a la funcion PUT");
document.getElementById("btnEdit").addEventListener("click", function(e){

    let idProduct = document.getElementById("idProduct");
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
    console.log(idProduct.value)
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
    
    obtenerPut(idProduct.value, name.value, price.value, 
                stock.value, description.value, color.value, size.value, category.value, 
                image.value, fk_idCategoryClothe.value, fk_idAdmin.value);

//Fetch a la URL de mi API (el RequestMapping del Controller)
});

function obtenerPut(idProduct, name, price, stock, description, 
    color, size, category, image, fk_idCategoryClothe, fk_idAdmin){

const datos = {
name: name,
price: price,
stock: stock,
description: description,
color: color, 
size: size,
category: category,
image: image,
fk_idCategoryClothe: fk_idCategoryClothe,
fk_idAdmin: fk_idAdmin
};
    
fetch (`http://localhost:8080/wm/product/${idProduct}?name=${name}&?price=${price}&?stock=${stock}
&?description=${description}&?color=${color}&?size=${size}&?category=${category}
&?image=${image}&?fk_idCategoryClothe=${fk_idCategoryClothe}&?fk_idAdmin=${fk_idAdmin}`, { //hago la conexion a la URL

//Especifico el tipo de solicitud que manejare
method: "PUT",
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
}