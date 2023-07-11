var elHeader = document.querySelector(".site-header");
var elButton = document.querySelector(".site-header__menu");

elButton.addEventListener("click", () => {
  elHeader.classList.toggle("open");
  if(elHeader.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.removeAttribute("style");
  }
})