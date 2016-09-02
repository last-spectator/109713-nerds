var link = document.querySelector(".address__btn");
var popup = document.querySelector(".modalWindow");
var close = popup.querySelector(".modalWindow__close");
var form = popup.querySelector(".modalWindow__form");
var login = popup.querySelector("[id=you-name]");
var password = popup.querySelector("[id=you-mail]");
var storage = localStorage.getItem("address__btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modalWindow-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modalWindow-show");
  popup.classList.remove("modalWindow-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modalWindow-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modalWindow-error");
  } else {
    local.Storage.setItem("login", login.value);
  }
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modalWindow-show")) {
      popup.classList.remove("modalWindow-show");
      popup.classList.remove("modalWindow-error");
    }
  }
});
