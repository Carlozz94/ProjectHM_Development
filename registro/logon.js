function redireccionIniciarSesion() {
  location.href = "./iniciarSesion.html";
}

function redireccionRegistro() {
  location.href = "./registro.html";
}

const formulario = document.querySelector("#registroUsuarios");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const telefono = document.querySelector("#telefono").value;
  const email = document.querySelector("#email").value;

  const nombreUsuario = document.getElementById("nombreUsuario");
  nombreUsuario.textContent = `${nombre}`;
}

function redireccionPerfil() {
  location.href = "./perfil.html";
}
