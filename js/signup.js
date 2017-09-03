const modal = document.querySelector(".modal");
const button = document.getElementById("signup");

button.onclick = function(e) {
  e.preventDefault();
  modal.className += " is-active";
};

(modal.querySelector(".modal-close")).onclick = function(e) {
  modal.className = "modal";
};
