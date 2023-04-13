
const stockProductosMujer= [ /*blusas */
  {
    id: 1,
    nombre: "Blusa blanca con cierre",
    cantidad: 1,
    desc: "Estilo formal",
    precio: 599,
    img: "../Assets/Mujer/Blusas/7_7.jpg",
  },
  {
    id: 2,
    nombre: "Blusa negra con tirantes",
    cantidad: 1,
    desc: "Estilo formal/casual",
    precio: 399,
    img: "../Assets/Mujer/Blusas/4.jpg",
  },
  {
    id: 3,
    nombre: "Camisa blanca overize",
    cantidad: 1,
    desc: "Casual",
    precio: 599,
    img: "../Assets/Mujer/Blusas/1.jpg",
  },
  {
    id: 4,
    nombre: "Blusa beige a tirantes",
    cantidad: 1,
    desc: "Estilo casual",
    precio: 399,
    img: "../Assets/Mujer/Blusas/12_12.jpg",
  },
]; 
const stockProductosMujerPlayeras= [
  {
    id: 5,
    nombre: "Playeras oversize",
    cantidad: 1,
    desc: "Casual",
    precio: 299,
    img: "../Assets/Mujer/Playeras/12.jpg",
  },
  {
    id: 6,
    nombre: "Playera Hippie",
    cantidad: 1,
    desc: "Casual",
    precio: 599,
    img: "../Assets/Mujer/Playeras/11.jpg",
  },
  {
    id: 7,
    nombre: "Playera con letras",
    cantidad: 1,
    desc: "Trendy",
    precio: 499,
    img: "../Assets/Mujer/Playeras/3.jpg",
  },
  {
    id: 8,
    nombre: "Playera rayada",
    cantidad: 1,
    desc: "Casual/Primavera",
    precio: 499,
    img: "../Assets/Mujer/Playeras/4.jpg",
  }
];
const stockProductosMujerPantalones= [
  {
    id: 9,
    nombre: "Pantalón negro",
    cantidad: 1,
    desc: "Casual",
    precio: 699,
    img: "../Assets/Mujer/Pantalones/4.jpg",
  },
  {
    id: 10,
    nombre: "Pantalón de vestir negro",
    cantidad: 1,
    desc: "Formal",
    precio: 699,
    img: "../Assets/Mujer/Pantalones/5.jpg",
  },
  {
    id: 11,
    nombre: "Pantalón mezclilla clara",
    cantidad: 1,
    desc: "Casual/Trendy",
    precio: 699,
    img: "../Assets/Mujer/Pantalones/3.jpg",
  },
  {
    id: 12,
    nombre: "Pantalón mezclilla roto",
    cantidad: 1,
    desc: "Casual/Urban",
    precio: 699,
    img: "../Assets/Mujer/Pantalones/1.jpg",
  }
];
const stockProductosMujerVestidos= [
  {
    id: 13,
    nombre: "Vestido cuadros rojo/negro",
    cantidad: 1,
    desc: "Vestido casual con cinturón",
    precio: 899,
    img: "../Assets/Mujer/Vestidos/6_6.jpg",
  },
  {
    id: 14,
    nombre: "Vestido mezclilla con botones",
    cantidad: 1,
    desc: "Casual",
    precio: 899,
    img: "../Assets/Mujer/Vestidos/1.jpg",
  },
  {
    id: 15,
    nombre: "Vestido arena casual",
    cantidad: 1,
    desc: "Trendy/casual",
    precio: 999,
    img: "../Assets/Mujer/Vestidos/4.jpg",
  },
  {
    id: 16,
    nombre: "Vestido negro formal",
    cantidad: 1,
    desc: "Formal/cómodo",
    precio: 999,
    img: "../Assets/Mujer/Vestidos/2.jpg",
  }
];
const stockProductosMujerSueteres= [
  {
    id: 17,
    nombre: "Suéter oversize",
    cantidad: 1,
    desc: "Casual/Cómodo",
    precio: 599,
    img: "../Assets/Mujer/Sueteres/1.jpg",
  },
  {
    id: 18,
    nombre: "Abrigo con bolsas",
    cantidad: 1,
    desc: "Casual/Cómodo/Trendy",
    precio: 899,
    img: "../Assets/Mujer/Sueteres/3.jpg",
  },
  {
    id: 19,
    nombre: "Suéter azul con botones",
    cantidad: 1,
    desc: "Casual/Cómodo",
    precio: 499,
    img: "../Assets/Mujer/Sueteres/14.jpg",
  },
  {
    id: 20,
    nombre: "Suéter gris largo",
    cantidad: 1,
    desc: "Casual/Cómodo",
    precio: 599,
    img: "../Assets/Mujer/Sueteres/2.jpg",
  }
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const contenedorMP = document.querySelector('#contenedorMP');
const contenedorMPa = document.querySelector('#contenedorMPa');
const contenedorMV = document.querySelector('#contenedorMV');
const contenedorMS = document.querySelector('#contenedorMS');
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});

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
      location.href = "compraW.html";
    }
  });
}

stockProductosMujer.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
    <img class="card-img-top my-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: $${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="botonMain" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

stockProductosMujerPlayeras.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedorMP) {
    contenedorMP.innerHTML += `
    <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
    <img class="card-img-top my-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: $${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="botonMain" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

stockProductosMujerPantalones.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedorMPa) {
    contenedorMPa.innerHTML += `
    <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
    <img class="card-img-top my-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: $${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="botonMain" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

stockProductosMujerVestidos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedorMV) {
    contenedorMV.innerHTML += `
    <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
    <img class="card-img-top my-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: $${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="botonMain" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

stockProductosMujerSueteres.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedorMS) {
    contenedorMS.innerHTML += `
    <div class="card mt-3" style="width: 22rem; margin:auto;background-color: #fdfcf5;">
    <img class="card-img-top my-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: $${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="botonMain" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  let sum1 = stockProductosMujerPlayeras.length + stockProductosMujer.length;
  let sum2 = sum1 + stockProductosMujerPantalones.length;
  let sum3 = sum2 + stockProductosMujerVestidos.length;
  let sum4 = sum3 + stockProductosMujerSueteres.length;

  const existe = carrito.some(prod => prod.id === id)
  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else if(id>0  && id<=stockProductosMujer.length){
    const item = stockProductosMujer.find((prod) => prod.id === id)
    carrito.push(item)
  }
  else if(id>stockProductosMujer.length  && id <= sum1){
    const item = stockProductosMujerPlayeras.find((prod) => prod.id === id)
    carrito.push(item)
  }
  else if(id>sum1 && id <= sum2){
    const item = stockProductosMujerPantalones.find((prod) => prod.id === id)
    carrito.push(item)
  }
  else if(id>sum2 && id <= sum3){
    const item = stockProductosMujerVestidos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  else if(id>sum3 && id <= sum4){
    const item = stockProductosMujerSueteres.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()
};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: $${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="botonMainEliminar"  onclick="eliminarProducto(${id})">Eliminar producto</button>
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
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const productId = id;
  carrito = carrito.filter((product) => product.id !== productId);
  mostrarCarrito();
}

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>$${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

const btn = document.getElementById('btnFinCompra');
btn.addEventListener("click", e =>{
  btn.value = 'Enviando...';
  setTimeout(() => {
    alert("Compra exitosa");
    localStorage.removeItem("carrito");

  }, 1000);
});

 function enviarCompra(e){
   e.preventDefault();

  const btn = document.getElementById('button');

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';
    
   const spinner = document.querySelector('#spinner');
   spinner.classList.add('d-flex');
   spinner.classList.remove('d-none');

   setTimeout(() => {
     spinner.classList.remove('d-flex');
     spinner.classList.add('d-none');
     formulario.reset();

     const alertExito = document.createElement('p');
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success');
     alertExito.textContent = 'Compra realizada correctamente';
     formulario.appendChild(alertExito);

     setTimeout(() => {
       alertExito.remove();
     }, 3000)
   }, 3000)
 localStorage.clear();
 }