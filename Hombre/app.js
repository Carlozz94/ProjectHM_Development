const stockProductosHombre= [ /* CAMISAS*/
    {
      id: 1,
      nombre: "Camisa Azul",
      cantidad: 1,
      desc: "Casual",
      precio: 800,
      img: "../Assets/Hombre/CamisaAzul.jpg",
    },
    {
      id: 2,
      nombre: "Camisa de cuadros roja",
      cantidad: 1,
      desc: "Casual",
      precio: 799,
      img: "../Assets/Hombre/CamisaCuadrosRoja.jpg",
    },
    {
      id: 3,
      nombre: "Camisa azul claro",
      cantidad: 1,
      desc: "Casual",
      precio: 1200,
      img: "../Assets/Hombre/CamisaAzulClaro.jpg",
    }
  ];

  const stockProductosHombrePantalones= [ /*pantalones*/
  {
      id: 4,
      nombre: "Pantalon de mezclilla azul",
      cantidad: 1,
      desc: "Casual",
      precio: 1199,
      img: "../Assets/Hombre/PantalonMezclillaAzul.jpg",
    },
    {
      id: 5,
      nombre: "Pantalon Blanco",
      cantidad: 1,
      desc: "Semi Formal",
      precio: 1399,
      img: "../Assets/Hombre/PantalonBlanco.jpg",
    },
    {
      id: 6,
      nombre: "Pantalon Marron",
      cantidad: 1,
      desc: "Casual",
      precio: 699,
      img: "../Assets/Hombre/PantalonMarron.jpg",
    }
];

const stockProductosHombreSacos= [ /*sacos*/  
{
      id: 7,
      nombre: "Saco Marron",
      cantidad: 1,
      desc: 'Semi Formal',
      precio: 1299,
      img: "../Assets/Hombre/SacoMarron.jpg",
    },
    {
      id: 8,
      nombre: "Saco Cuadros",
      cantidad: 1,
      desc: "Semi formal",
      precio: 999,
      img: "../Assets/Hombre/SacoCuadros.jpg",
    }
];

  const stockProductosHombreMas= [ /* y mas*/
  {
      id: 9,
      nombre: "Playera Blanca",
      cantidad: 1,
      desc: "Casual",
      precio: 999,
      img: "../Assets/Hombre/PlayeraBlanca.jpg",
    },
    {
      id: 10,
      nombre: "Sudadera Verde",
      cantidad: 1,
      desc: "Casual",
      precio: 1399,
      img: "../Assets/Hombre/SudaderaVerde.jpg",
    }
];
  let carrito = [];
  
  const contenedor = document.querySelector("#contenedor");
  const contenedorPAN = document.querySelector('#contenedorPAN');
  const contenedorSA = document.querySelector('#contenedorSA');
  const contenedorMAS = document.querySelector('#contenedorMAS');
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
  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
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
        location.href = "compraM.html";
      }
    });
  }
  
  stockProductosHombre.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
      <div class="card mt-3" style="width: 22rem; margin:auto;">
      <img class="card-img-top my-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });

  stockProductosHombrePantalones.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedorPAN) {
      contenedorPAN.innerHTML += `
      <div class="card mt-3" style="width: 22rem; margin:auto;">
      <img class="card-img-top my-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });

  stockProductosHombreSacos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedorSA) {
      contenedorSA.innerHTML += `
      <div class="card mt-3" style="width: 22rem; margin:auto;">
      <img class="card-img-top my-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });

  stockProductosHombreMas.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedorMAS) {
      contenedorMAS.innerHTML += `
      <div class="card mt-3" style="width: 22rem; margin:auto;">
      <img class="card-img-top my-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });
  
  const agregarProducto = (id) => {
    let sum1 = stockProductosHombrePantalones.length + stockProductosHombre.length;
    let sum2 = sum1 + stockProductosHombreSacos.length;
    let sum3 = sum2 + stockProductosHombreMas.length;

    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else if(id > 0 && id <= stockProductosHombre.length){
      const item = stockProductosHombre.find((prod) => prod.id === id)
      carrito.push(item)
    }
    else if(id > stockProductosHombre.length && id <= sum1){
    const item = stockProductosHombrePantalones.find((prod) => prod.id === id)
    carrito.push(item)
  }
  else if(id > sum1 && id <= sum2){
    const item = stockProductosHombreSacos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  else if(id > sum2 && id <= sum3){
    const item = stockProductosHombreMas.find((prod) => prod.id === id)
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
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
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
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const { id, nombre, precio, img, cantidad } = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  
   function enviarCompra(e){
     e.preventDefault()
     const cliente = document.querySelector('#cliente').value
     const email = document.querySelector('#correo').value
  
     if(email === '' || cliente == ''){
       Swal.fire({
         title: "¡Debes completar tu email y nombre!",
         text: "Rellena el formulario",
         icon: "error",
         confirmButtonText: "Aceptar",
     })
   } else {
  
    const btn = document.getElementById('button');
  
  // document.getElementById('procesar-pago')
  //  .addEventListener('submit', function(event) {
  //    event.preventDefault();
  
     btn.value = 'Enviando...';
  
     const serviceID = 'default_service';
     const templateID = 'template_qxwi0jn';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Finalizar compra';
        alert('Correo enviado!');
      }, (err) => {
        btn.value = 'Finalizar compra';
        alert(JSON.stringify(err));
      });
      
     const spinner = document.querySelector('#spinner')
     spinner.classList.add('d-flex')
     spinner.classList.remove('d-none')
  
     setTimeout(() => {
       spinner.classList.remove('d-flex')
       spinner.classList.add('d-none')
       formulario.reset()
  
       const alertExito = document.createElement('p')
       alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
       alertExito.textContent = 'Compra realizada correctamente'
       formulario.appendChild(alertExito)
  
       setTimeout(() => {
         alertExito.remove()
       }, 3000)
  
  
     }, 3000)
   }
   localStorage.clear()
  
   }