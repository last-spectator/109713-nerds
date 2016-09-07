var link = document.querySelector(".address-btn");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".modal-form");
var login = popup.querySelector("[id=you-name]");
var password = popup.querySelector("[id=you-mail]");
var storage = localStorage.getItem("address-btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    local.Storage.setItem("login", login.value);
  }
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
