/* function openModal() {
    document.getElementById("resumeModal").style.display = "flex";
    document.body.classList.add("modal-open")
}

function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
    document.body.classList.remove("modal-open");
} */

function openModal() {
  const modal = document.getElementById("resumeModal");
  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("resumeModal");
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}
