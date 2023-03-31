const recuperar = document.querySelector("#recuperar");
recuperar.addEventListener("submit", (e) => {
  e.preventDefault();

  window.location.href = "./recuperarContra.html";
});
