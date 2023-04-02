const iniciar = document.querySelector("#inicio");
iniciar.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;

  const contrasena = document.querySelector("#contrasena").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const valido = usuarios.find(
    (usuarios) => usuarios.email === email && usuarios.contrasena == contrasena
  );

  if (!valido) {
    return alert("El usuario no existe o ingreso datos incorrectos");
  }
  alert("Bienvenido");

  window.location.href = "./perfil.html";
});
