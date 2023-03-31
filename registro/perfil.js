var perfilUsuario = JSON.parse(localStorage.getItem("usuarios"));

var usuario = perfilUsuario.length;

document.querySelector("#nombreUsuario").textContent =
  perfilUsuario[usuario - 1].nombre;

document.querySelector("#apellidoUsuario").textContent =
  perfilUsuario[usuario - 1].apellido;

document.querySelector("#emailUsuario").textContent =
  perfilUsuario[usuario - 1].email;

document.querySelector("#telefonoUsuario").textContent =
  perfilUsuario[usuario - 1].telefono;
