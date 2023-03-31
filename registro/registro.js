const registrarse = document.querySelector("#registroUsuarios");
registrarse.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.clear();
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const telefono = document.querySelector("#telefono").value;
  const email = document.querySelector("#email").value;
  const contrasena = document.querySelector("#contrasena").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const estaRegistrado = usuarios.find((usuarios) => usuarios.email === email);

  if (estaRegistrado) {
    return alert("el usuario ya esta registrado");
  }

  usuarios.push({
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    contrasena: contrasena,
  });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("se registro correctamente");
  window.location.href = "./iniciarSesion.html";
});
