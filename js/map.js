var map = document.querySelector(".modal_map");
var mapClose = document.querySelector(".map_close");
var mapOpen = document.querySelector(".map_open");
var ESC = 27;

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map_show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("map_show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC) {
    if (map.classList.contains("map_show")) {
      evt.preventDefault();
      map.classList.remove("map_show");
    }
  }
});
