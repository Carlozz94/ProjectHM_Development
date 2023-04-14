const URL_MAIN = 'https://projecthmdevelopmentback-production.up.railway.app/wm/product/';
//let productos;
let carrito = [];
let productos;

function addItems(contenedor,contenedorPAN,contenedorSA,contenedorMAS) { //div_Productos es el div donde se va a agregar los productos
  fetch(URL_MAIN, {
      method: 'get' //tipo de método
  }).then(function(response) {//response es la respuesta del servidor
      response.json().then(function (json) { //json es el objeto que se obtiene del servicio
          console.log(json); //imprime el json
          console.log(json.length); //imprime el tamaño del json
          productos = json; //se guarda el json en la variable productos
          Array.from(json).forEach((prod) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
            const {idProduct, name, price, stock, description, color, size, category, image, fk_idCategoryClothe, fk_idAdmin} = prod;
            if (contenedor && fk_idCategoryClothe == 6 && category == "Hombre") {
              contenedor.innerHTML += `
                <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
                <img class="card-img-top my-2" src="${image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">Precio: $${price}</p>
                  <p class="card-text">Descripcion: ${description}</p>
                  <p class="card-text">Cantidad: ${stock}</p>
                  <button class="botonMain" onclick="agregarProducto(${idProduct})">Comprar Producto</button>
                </div>
              </div>
                `;
            }else if(contenedorPAN && fk_idCategoryClothe == 3 && category == "Hombre"){
              contenedorPAN.innerHTML += `
                <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
                <img class="card-img-top my-2" src="${image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">Precio: $${price}</p>
                  <p class="card-text">Descripcion: ${description}</p>
                  <p class="card-text">Cantidad: ${stock}</p>
                  <button class="botonMain" onclick="agregarProducto(${idProduct})">Comprar Producto</button>
                </div>
              </div>
                `;
            }else if(contenedorSA && fk_idCategoryClothe == 7 && category == "Hombre"){
              contenedorSA.innerHTML += `
                <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
                <img class="card-img-top my-2" src="${image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">Precio: $${price}</p>
                  <p class="card-text">Descripcion: ${description}</p>
                  <p class="card-text">Cantidad: ${stock}</p>
                  <button class="botonMain" onclick="agregarProducto(${idProduct})">Comprar Producto</button>
                </div>
              </div>
                `;
            }else if(contenedorMAS && fk_idCategoryClothe == 2 && category == "Hombre"){
              contenedorMAS.innerHTML += `
                <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
                <img class="card-img-top my-2" src="${image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">Precio: $${price}</p>
                  <p class="card-text">Descripcion: ${description}</p>
                  <p class="card-text">Cantidad: ${stock}</p>
                  <button class="botonMain" onclick="agregarProducto(${idProduct})">Comprar Producto</button>
                </div>
              </div>
                `;
            }
          }); // foreach para agregar los productos al div del HTML
      });//then
  }).catch(function(err) { //si hay un error
      console.log(err); //imprime el error
  });
}// addItems

window.addEventListener("load", function (){ //cuando se cargue la página
  const contenedor = document.querySelector("#contenedor"); //contenedor donde se va a agregar los producto
  const contenedorPAN = document.querySelector("#contenedorPAN");//contenedor donde se va a agregar los producto
  const contenedorSA = document.querySelector("#contenedorSA");//contenedor donde se va a agregar los producto
  const contenedorMAS = document.querySelector("#contenedorMAS");//contenedor donde se va a agregar los producto
  addItems(contenedor,contenedorPAN,contenedorSA,contenedorMAS); //se llama a la función addItems
});

const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector("#procesar-pago");

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if (formulario) {
  formulario.addEventListener("submit", enviarCompra);
}

if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "../Mujer/compraW.html";
    }
  });
}

/* CLASE DEFAULT DE LOS BOTONES ANTES DE CAMBIO GJC
  ubicacion: estamos en pantalones hombre
    class="btn btn-primary"
  */

const agregarProducto = (id) => {
  const existe = carrito.some((prod) => prod.idProduct === id);
  if (existe) {
    const prod = carrito.map((prod) => {
      if (prod.idProduct === id) {
          prod.cantidad++;
      }
    });
  } 
  else{
    const item = productos.find((prod) => prod.idProduct === id);
    carrito.push(item);
    carrito.forEach((prod) => prod.cantidad = 1);
  }
  mostrarCarrito();
};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { idProduct, name, price, stock, description, color, size, category, image, fk_idCategoryClothe, fk_idAdmin, cantidad} = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${image}"/>
          </div>
          <div>
          <p>Producto: ${name}</p>
        <p>Precio: ${price}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="botonMainEliminar"  onclick="eliminarProducto(${idProduct})">Eliminar producto</button>
          </div>
        </div> 
    
        `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = (carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)).toFixed(2);
  }
  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const productId = id;
  carrito = carrito.filter((prod) => prod.idProduct !== productId);
  mostrarCarrito();
}

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { idProduct, name, price, stock, description, color, size, category, image, fk_idCategoryClothe, fk_idAdmin, cantidad} = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${image}"/>
                </td>
                <td>${name}</td>
              <td>${price}</td>
              <td>${cantidad}</td>
              <td>${(price * cantidad).toFixed(2)}</td>
              `;
      listaCompra.appendChild(row);
    }
  });
  if(totalProceso){
    totalProceso.innerText = (carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)).toFixed(2);
  }
}

function enviarCompra(e) {
  e.preventDefault();
  const cliente = document.querySelector("#cliente").value;
  const email = document.querySelector("#correo").value;

  if (email === "" || cliente == "") {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    const btn = document.getElementById("button");

    // document.getElementById('procesar-pago')
    //  .addEventListener('submit', function(event) {
    //    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_qxwi0jn";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Finalizar compra";
        alert("Correo enviado!");
      },
      (err) => {
        btn.value = "Finalizar compra";
        alert(JSON.stringify(err));
      }
    );

    const spinner = document.querySelector("#spinner");
    spinner.classList.add("d-flex");
    spinner.classList.remove("d-none");

    setTimeout(() => {
      spinner.classList.remove("d-flex");
      spinner.classList.add("d-none");
      formulario.reset();

      const alertExito = document.createElement("p");
      alertExito.classList.add(
        "alert",
        "alerta",
        "d-block",
        "text-center",
        "col-12",
        "mt-2",
        "alert-success"
      );
      alertExito.textContent = "Compra realizada correctamente";
      formulario.appendChild(alertExito);

      setTimeout(() => {
        alertExito.remove();
      }, 3000);
    }, 3000);
  }
  localStorage.clear();
}
