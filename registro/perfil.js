var perfilUsuario = JSON.parse(localStorage.getItem("usuarioIniciado"));
console.log(perfilUsuario);
console.log(perfilUsuario.length);
//var usuario = perfilUsuario.length;

document.querySelector("#nombreUsuario").textContent =
  perfilUsuario[0].Nombre;

document.querySelector("#apellidoUsuario").textContent =
  perfilUsuario[0].Apellido;

document.querySelector("#emailUsuario").textContent =
  perfilUsuario[0].Email;

//document.querySelector("#telefonoUsuario").textContent = '123456789';

//ejemplo localStorage.removeItem('image');
localStorage.removeItem('usuarioIniciado');
  function salirPerfil() {
    location.href = "../index.html";
  }