function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".burger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  let button = event.relatedTarget
  // Extract info from data-bs-* attributes
  let recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  let modalTitle = exampleModal.querySelector('.modal-title')
  let modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalBodyInput.value = recipient
})

let exexampleModal = document.getElementById('1exampleModal')
exexampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  let button = event.relatedTarget
  // Extract info from data-bs-* attributes
  let recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  let modalBodyInput = exexampleModal.querySelector('.modal-body input')

  modalBodyInput.value = recipient
})
