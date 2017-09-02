const modal = document.querySelector(".modal");
const button = document.getElementById("signup");
console.log(modal);
console.log(button);
button.onclick = function(e) {
  console.log("Hello!");
  e.preventDefault();
  modal.className += " is-active";
};

(modal.querySelector(".modal-close")).onclick = function(e) {
  modal.className = "modal";
};
