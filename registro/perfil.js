var perfilUsuario = JSON.parse(localStorage.getItem("usuarios"));

document.querySelector("#nombreUsuario").textContent = perfilUsuario[0].nombre;

document.querySelector("#apellidoUsuario").textContent =
  perfilUsuario[0].apellido;

document.querySelector("#emailUsuario").textContent = perfilUsuario[0].email;

document.querySelector("#telefonoUsuario").textContent =
  perfilUsuario[0].telefono;
