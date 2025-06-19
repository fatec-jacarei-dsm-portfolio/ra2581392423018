document.addEventListener("DOMContentLoaded", function () {
  const anoAtual = new Date().getFullYear();
  const elementoAno = document.getElementById("ano-atual");
  if (elementoAno) {
    elementoAno.textContent = anoAtual;
  }
});