var botaoMenu = document.querySelector(".js-botao-menu");

botaoMenu.onclick = function () {
  var menu = document.querySelector(".js-menu");
  menu.classList.toggle("menu--toggle");
};
