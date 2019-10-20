var link = document.querySelector(".write_to_us");
var popup = document.querySelector(".popup");
var close = document.querySelector(".link_close");
var form = document.querySelector(".write_to_us_form");
var youName = document.getElementById("name");
var mail = document.getElementById("e-mail");
var text = document.getElementById("text");
var ESC = 27;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (text.value && mail.value && youName.value) {
    form.submit();
  } else {
    popup.classList.add("popup-error");
  }
});
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  youName.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
    }
  }
});
