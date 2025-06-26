function openModal(imagen, titulo, texto) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = imagen;
  document.getElementById("modal-title").innerText = titulo;
  document.getElementById("modal-text").innerText = texto;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
